
  $(document).ready(function(){
    $("#btn2").click(function(){

      var custRate;
       let message="";
        //this capture the parameter passes automatically by the browser
        var parameters = location.search.substring(1).split("&");
        var temp=parameters[0].split("=");
         let id = unescape(temp[1]);


        //Retreving stored reviews from localStorage----------------

        let reviewList;
        if(localStorage.getItem('rl')){
        reviewList=JSON.parse(localStorage.getItem('rl'));
        }
        else{
         reviewList=[];
        }


           str=$("#text-review").val();

           let rev;
            rev = new customerReview(id, str);
            reviewList.push(rev);
            localStorage.setItem('rl', JSON.stringify(reviewList));

           //retreving dat from review stored list
           let storedreview= reviewArray;
           storedreview.push(rev);
           //retreview reviews from localStorage initially ONLY
        
           for(let i = 0; i<storedreview.length; i++){
             let rev1=storedreview[i];
             if(rev1.id == id){
               message=message+ rev1.review+"<br>";
             }
           }

          /* for(let i = 0; i<reviewList.length; i++){
             let rev2=reviewList[i];
             if(rev2.id == id){
               message=message+ rev2.review+"<br>";
             }
           }*/

            //  return message;


      //=====================


        var mess = message.split("<br>");//reviews of current item

          var score=0, count=0;
        for(var i = 0; i<keywords.length; i++){
          var kword=keywords[i].word;
          //alert(kword);

          for(var j = 0; j<mess.length; j++){
            var str = mess[j];
            var num = str.search(new RegExp(kword, 'i'));
            //  alert(str +":"+kword);
            if(num>-1){
          //  alert(num);
              score += parseInt(keywords[i].points);
              count++;
            }

          }
        }
        //alert("Score: " + score +" count " + count +" avg" + score/count)

        if(count>0 && score >0){
          var avg = score/count;
          var avgR = avg.toFixed(2);
          custRate="Customer Rating: "+ avgR +" of 10";
        }
        else{
           custRate="Customer Rating: No Rated!"
         }
       //==================

       $("#p-rate").html(custRate);
       $("#p-review").html(message);
    });
  });


    //reviewArray[];
    function customerReview(id, review){
      var id;
      var review;
      this.id=id;
      this.review=review;
    }
