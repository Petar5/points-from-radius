
/*
 0----------1
 |          |
 |          |
 |          |
 3----------2       
*/


/**
 * Points from radius
 * @param  float centerX 
 * @param  float centerY 
 * @param  float radius  
 * @return array
 */
function getPointsFromRadius(centerX, centerY, radius)
{
    var points = new Array();

    points[0] = {
      x: centerX - radius,
      y: centerY + radius
    }

    points[1] = {
      x: centerX + radius,
      y: centerY + radius
    }

    points[2] = {
      x: centerX + radius,
      y: centerY - radius
    }

    points[3] = {
      x: centerX - radius,
      y: centerY - radius
    }

    return points;
}