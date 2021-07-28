// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, K) {
    let day = 0
    let finalDay = 0
    let finalDayName = ""
    switch(S) {
          case "Mon":
              day =0;
            break;
           case "Tue":
                day =1;
            break;
            case "Wed":
                    day =2;
            break;
            case "Thu":
                    day =3;
            break;
            case "Fri":
                    day =4;
            break;
            case "Sat":
                    day =5;
            break;
            case "Sun":
                    day =6;
            break;
        }
    finalDay = day + K
    switch(finalDay%7) {
        case 0:
                finalDayName ="Mon";
          break;
         case 1:
              finalDayName ="Tue";
          break;
          case 2:
                  finalDayName ="Wed";
          break;
          case 3:
                  finalDayName ="Thu";
          break;
          case 4:
                  finalDayName ="Fri";
          break;
          case 5:
                  finalDayName ="Sat";
          break;
          case 6:
                  finalDayName ="Sun";
          break;
      }
      return finalDayName

}