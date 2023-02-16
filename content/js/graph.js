/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 36.0, "minX": 0.0, "maxY": 78522.0, "series": [{"data": [[0.0, 36.0], [0.1, 36.0], [0.2, 36.0], [0.3, 36.0], [0.4, 37.0], [0.5, 37.0], [0.6, 37.0], [0.7, 37.0], [0.8, 37.0], [0.9, 37.0], [1.0, 37.0], [1.1, 37.0], [1.2, 37.0], [1.3, 37.0], [1.4, 37.0], [1.5, 38.0], [1.6, 38.0], [1.7, 38.0], [1.8, 38.0], [1.9, 38.0], [2.0, 38.0], [2.1, 38.0], [2.2, 38.0], [2.3, 38.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 38.0], [2.8, 38.0], [2.9, 38.0], [3.0, 38.0], [3.1, 38.0], [3.2, 38.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 39.0], [4.1, 39.0], [4.2, 39.0], [4.3, 39.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 39.0], [6.8, 39.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 40.0], [8.0, 40.0], [8.1, 40.0], [8.2, 40.0], [8.3, 40.0], [8.4, 40.0], [8.5, 40.0], [8.6, 40.0], [8.7, 40.0], [8.8, 40.0], [8.9, 40.0], [9.0, 40.0], [9.1, 40.0], [9.2, 40.0], [9.3, 40.0], [9.4, 40.0], [9.5, 40.0], [9.6, 40.0], [9.7, 40.0], [9.8, 40.0], [9.9, 41.0], [10.0, 41.0], [10.1, 41.0], [10.2, 41.0], [10.3, 41.0], [10.4, 41.0], [10.5, 41.0], [10.6, 41.0], [10.7, 41.0], [10.8, 41.0], [10.9, 41.0], [11.0, 41.0], [11.1, 41.0], [11.2, 41.0], [11.3, 41.0], [11.4, 41.0], [11.5, 41.0], [11.6, 41.0], [11.7, 41.0], [11.8, 41.0], [11.9, 41.0], [12.0, 41.0], [12.1, 41.0], [12.2, 41.0], [12.3, 42.0], [12.4, 42.0], [12.5, 42.0], [12.6, 42.0], [12.7, 42.0], [12.8, 42.0], [12.9, 42.0], [13.0, 42.0], [13.1, 42.0], [13.2, 42.0], [13.3, 42.0], [13.4, 42.0], [13.5, 42.0], [13.6, 42.0], [13.7, 42.0], [13.8, 42.0], [13.9, 42.0], [14.0, 42.0], [14.1, 42.0], [14.2, 42.0], [14.3, 42.0], [14.4, 42.0], [14.5, 42.0], [14.6, 43.0], [14.7, 43.0], [14.8, 43.0], [14.9, 43.0], [15.0, 43.0], [15.1, 43.0], [15.2, 43.0], [15.3, 43.0], [15.4, 43.0], [15.5, 43.0], [15.6, 43.0], [15.7, 43.0], [15.8, 43.0], [15.9, 43.0], [16.0, 43.0], [16.1, 43.0], [16.2, 43.0], [16.3, 43.0], [16.4, 43.0], [16.5, 44.0], [16.6, 44.0], [16.7, 44.0], [16.8, 44.0], [16.9, 44.0], [17.0, 44.0], [17.1, 44.0], [17.2, 44.0], [17.3, 44.0], [17.4, 44.0], [17.5, 44.0], [17.6, 44.0], [17.7, 44.0], [17.8, 44.0], [17.9, 44.0], [18.0, 44.0], [18.1, 44.0], [18.2, 44.0], [18.3, 45.0], [18.4, 45.0], [18.5, 45.0], [18.6, 45.0], [18.7, 45.0], [18.8, 45.0], [18.9, 45.0], [19.0, 45.0], [19.1, 45.0], [19.2, 45.0], [19.3, 45.0], [19.4, 45.0], [19.5, 45.0], [19.6, 45.0], [19.7, 45.0], [19.8, 45.0], [19.9, 46.0], [20.0, 46.0], [20.1, 46.0], [20.2, 46.0], [20.3, 46.0], [20.4, 46.0], [20.5, 46.0], [20.6, 46.0], [20.7, 46.0], [20.8, 46.0], [20.9, 46.0], [21.0, 46.0], [21.1, 46.0], [21.2, 46.0], [21.3, 46.0], [21.4, 47.0], [21.5, 47.0], [21.6, 47.0], [21.7, 47.0], [21.8, 47.0], [21.9, 47.0], [22.0, 47.0], [22.1, 47.0], [22.2, 47.0], [22.3, 47.0], [22.4, 47.0], [22.5, 48.0], [22.6, 48.0], [22.7, 48.0], [22.8, 48.0], [22.9, 48.0], [23.0, 48.0], [23.1, 48.0], [23.2, 48.0], [23.3, 48.0], [23.4, 48.0], [23.5, 49.0], [23.6, 49.0], [23.7, 49.0], [23.8, 49.0], [23.9, 49.0], [24.0, 49.0], [24.1, 49.0], [24.2, 49.0], [24.3, 49.0], [24.4, 49.0], [24.5, 49.0], [24.6, 49.0], [24.7, 49.0], [24.8, 49.0], [24.9, 49.0], [25.0, 49.0], [25.1, 49.0], [25.2, 49.0], [25.3, 50.0], [25.4, 50.0], [25.5, 50.0], [25.6, 50.0], [25.7, 50.0], [25.8, 50.0], [25.9, 50.0], [26.0, 50.0], [26.1, 50.0], [26.2, 50.0], [26.3, 50.0], [26.4, 50.0], [26.5, 50.0], [26.6, 50.0], [26.7, 51.0], [26.8, 51.0], [26.9, 51.0], [27.0, 51.0], [27.1, 51.0], [27.2, 51.0], [27.3, 51.0], [27.4, 51.0], [27.5, 51.0], [27.6, 51.0], [27.7, 51.0], [27.8, 52.0], [27.9, 52.0], [28.0, 52.0], [28.1, 52.0], [28.2, 52.0], [28.3, 52.0], [28.4, 52.0], [28.5, 52.0], [28.6, 52.0], [28.7, 52.0], [28.8, 52.0], [28.9, 53.0], [29.0, 53.0], [29.1, 53.0], [29.2, 53.0], [29.3, 53.0], [29.4, 53.0], [29.5, 53.0], [29.6, 53.0], [29.7, 53.0], [29.8, 53.0], [29.9, 54.0], [30.0, 54.0], [30.1, 54.0], [30.2, 54.0], [30.3, 54.0], [30.4, 54.0], [30.5, 54.0], [30.6, 54.0], [30.7, 54.0], [30.8, 54.0], [30.9, 54.0], [31.0, 55.0], [31.1, 55.0], [31.2, 55.0], [31.3, 55.0], [31.4, 55.0], [31.5, 55.0], [31.6, 55.0], [31.7, 55.0], [31.8, 55.0], [31.9, 56.0], [32.0, 56.0], [32.1, 56.0], [32.2, 56.0], [32.3, 56.0], [32.4, 56.0], [32.5, 56.0], [32.6, 56.0], [32.7, 57.0], [32.8, 57.0], [32.9, 57.0], [33.0, 57.0], [33.1, 57.0], [33.2, 57.0], [33.3, 57.0], [33.4, 58.0], [33.5, 58.0], [33.6, 58.0], [33.7, 58.0], [33.8, 58.0], [33.9, 58.0], [34.0, 58.0], [34.1, 58.0], [34.2, 58.0], [34.3, 58.0], [34.4, 58.0], [34.5, 58.0], [34.6, 58.0], [34.7, 59.0], [34.8, 59.0], [34.9, 59.0], [35.0, 59.0], [35.1, 59.0], [35.2, 59.0], [35.3, 59.0], [35.4, 59.0], [35.5, 60.0], [35.6, 60.0], [35.7, 60.0], [35.8, 60.0], [35.9, 60.0], [36.0, 61.0], [36.1, 61.0], [36.2, 61.0], [36.3, 61.0], [36.4, 62.0], [36.5, 62.0], [36.6, 62.0], [36.7, 62.0], [36.8, 62.0], [36.9, 63.0], [37.0, 63.0], [37.1, 63.0], [37.2, 63.0], [37.3, 63.0], [37.4, 63.0], [37.5, 63.0], [37.6, 63.0], [37.7, 64.0], [37.8, 64.0], [37.9, 64.0], [38.0, 64.0], [38.1, 65.0], [38.2, 65.0], [38.3, 65.0], [38.4, 65.0], [38.5, 65.0], [38.6, 65.0], [38.7, 65.0], [38.8, 66.0], [38.9, 66.0], [39.0, 66.0], [39.1, 66.0], [39.2, 66.0], [39.3, 67.0], [39.4, 67.0], [39.5, 67.0], [39.6, 67.0], [39.7, 68.0], [39.8, 68.0], [39.9, 68.0], [40.0, 68.0], [40.1, 68.0], [40.2, 69.0], [40.3, 69.0], [40.4, 69.0], [40.5, 70.0], [40.6, 70.0], [40.7, 70.0], [40.8, 71.0], [40.9, 71.0], [41.0, 71.0], [41.1, 72.0], [41.2, 72.0], [41.3, 72.0], [41.4, 72.0], [41.5, 73.0], [41.6, 73.0], [41.7, 73.0], [41.8, 73.0], [41.9, 74.0], [42.0, 74.0], [42.1, 74.0], [42.2, 75.0], [42.3, 75.0], [42.4, 76.0], [42.5, 76.0], [42.6, 76.0], [42.7, 77.0], [42.8, 77.0], [42.9, 78.0], [43.0, 79.0], [43.1, 80.0], [43.2, 80.0], [43.3, 82.0], [43.4, 82.0], [43.5, 82.0], [43.6, 82.0], [43.7, 83.0], [43.8, 83.0], [43.9, 84.0], [44.0, 85.0], [44.1, 85.0], [44.2, 86.0], [44.3, 87.0], [44.4, 88.0], [44.5, 89.0], [44.6, 89.0], [44.7, 90.0], [44.8, 91.0], [44.9, 91.0], [45.0, 92.0], [45.1, 92.0], [45.2, 93.0], [45.3, 93.0], [45.4, 93.0], [45.5, 94.0], [45.6, 95.0], [45.7, 95.0], [45.8, 95.0], [45.9, 95.0], [46.0, 96.0], [46.1, 96.0], [46.2, 96.0], [46.3, 97.0], [46.4, 98.0], [46.5, 98.0], [46.6, 99.0], [46.7, 99.0], [46.8, 100.0], [46.9, 100.0], [47.0, 101.0], [47.1, 102.0], [47.2, 103.0], [47.3, 105.0], [47.4, 105.0], [47.5, 106.0], [47.6, 106.0], [47.7, 108.0], [47.8, 108.0], [47.9, 109.0], [48.0, 109.0], [48.1, 111.0], [48.2, 111.0], [48.3, 112.0], [48.4, 113.0], [48.5, 114.0], [48.6, 114.0], [48.7, 115.0], [48.8, 115.0], [48.9, 116.0], [49.0, 116.0], [49.1, 116.0], [49.2, 116.0], [49.3, 116.0], [49.4, 117.0], [49.5, 117.0], [49.6, 117.0], [49.7, 117.0], [49.8, 118.0], [49.9, 118.0], [50.0, 118.0], [50.1, 118.0], [50.2, 118.0], [50.3, 118.0], [50.4, 118.0], [50.5, 119.0], [50.6, 119.0], [50.7, 119.0], [50.8, 120.0], [50.9, 120.0], [51.0, 120.0], [51.1, 120.0], [51.2, 121.0], [51.3, 121.0], [51.4, 121.0], [51.5, 122.0], [51.6, 122.0], [51.7, 122.0], [51.8, 122.0], [51.9, 122.0], [52.0, 122.0], [52.1, 122.0], [52.2, 123.0], [52.3, 123.0], [52.4, 124.0], [52.5, 124.0], [52.6, 124.0], [52.7, 124.0], [52.8, 125.0], [52.9, 125.0], [53.0, 125.0], [53.1, 126.0], [53.2, 126.0], [53.3, 127.0], [53.4, 127.0], [53.5, 127.0], [53.6, 128.0], [53.7, 128.0], [53.8, 128.0], [53.9, 128.0], [54.0, 129.0], [54.1, 129.0], [54.2, 129.0], [54.3, 129.0], [54.4, 130.0], [54.5, 130.0], [54.6, 130.0], [54.7, 130.0], [54.8, 130.0], [54.9, 131.0], [55.0, 131.0], [55.1, 131.0], [55.2, 131.0], [55.3, 131.0], [55.4, 131.0], [55.5, 132.0], [55.6, 132.0], [55.7, 132.0], [55.8, 132.0], [55.9, 132.0], [56.0, 133.0], [56.1, 133.0], [56.2, 133.0], [56.3, 133.0], [56.4, 134.0], [56.5, 134.0], [56.6, 134.0], [56.7, 134.0], [56.8, 135.0], [56.9, 135.0], [57.0, 135.0], [57.1, 135.0], [57.2, 135.0], [57.3, 136.0], [57.4, 137.0], [57.5, 138.0], [57.6, 138.0], [57.7, 139.0], [57.8, 139.0], [57.9, 139.0], [58.0, 140.0], [58.1, 140.0], [58.2, 141.0], [58.3, 142.0], [58.4, 142.0], [58.5, 142.0], [58.6, 142.0], [58.7, 144.0], [58.8, 144.0], [58.9, 144.0], [59.0, 145.0], [59.1, 145.0], [59.2, 145.0], [59.3, 145.0], [59.4, 146.0], [59.5, 149.0], [59.6, 149.0], [59.7, 150.0], [59.8, 150.0], [59.9, 151.0], [60.0, 152.0], [60.1, 152.0], [60.2, 153.0], [60.3, 153.0], [60.4, 154.0], [60.5, 154.0], [60.6, 154.0], [60.7, 154.0], [60.8, 156.0], [60.9, 159.0], [61.0, 160.0], [61.1, 160.0], [61.2, 162.0], [61.3, 162.0], [61.4, 163.0], [61.5, 163.0], [61.6, 164.0], [61.7, 165.0], [61.8, 166.0], [61.9, 167.0], [62.0, 168.0], [62.1, 168.0], [62.2, 169.0], [62.3, 170.0], [62.4, 171.0], [62.5, 171.0], [62.6, 172.0], [62.7, 173.0], [62.8, 174.0], [62.9, 174.0], [63.0, 174.0], [63.1, 176.0], [63.2, 177.0], [63.3, 177.0], [63.4, 177.0], [63.5, 178.0], [63.6, 179.0], [63.7, 182.0], [63.8, 184.0], [63.9, 184.0], [64.0, 185.0], [64.1, 187.0], [64.2, 188.0], [64.3, 189.0], [64.4, 190.0], [64.5, 194.0], [64.6, 194.0], [64.7, 195.0], [64.8, 196.0], [64.9, 196.0], [65.0, 197.0], [65.1, 197.0], [65.2, 197.0], [65.3, 198.0], [65.4, 199.0], [65.5, 200.0], [65.6, 201.0], [65.7, 201.0], [65.8, 202.0], [65.9, 202.0], [66.0, 202.0], [66.1, 202.0], [66.2, 203.0], [66.3, 204.0], [66.4, 206.0], [66.5, 206.0], [66.6, 206.0], [66.7, 207.0], [66.8, 207.0], [66.9, 207.0], [67.0, 208.0], [67.1, 208.0], [67.2, 208.0], [67.3, 209.0], [67.4, 211.0], [67.5, 211.0], [67.6, 211.0], [67.7, 213.0], [67.8, 213.0], [67.9, 215.0], [68.0, 216.0], [68.1, 217.0], [68.2, 219.0], [68.3, 219.0], [68.4, 220.0], [68.5, 221.0], [68.6, 221.0], [68.7, 222.0], [68.8, 223.0], [68.9, 224.0], [69.0, 224.0], [69.1, 225.0], [69.2, 226.0], [69.3, 227.0], [69.4, 227.0], [69.5, 228.0], [69.6, 229.0], [69.7, 229.0], [69.8, 230.0], [69.9, 231.0], [70.0, 231.0], [70.1, 232.0], [70.2, 233.0], [70.3, 234.0], [70.4, 234.0], [70.5, 234.0], [70.6, 235.0], [70.7, 235.0], [70.8, 235.0], [70.9, 235.0], [71.0, 235.0], [71.1, 235.0], [71.2, 235.0], [71.3, 237.0], [71.4, 237.0], [71.5, 237.0], [71.6, 238.0], [71.7, 238.0], [71.8, 240.0], [71.9, 241.0], [72.0, 242.0], [72.1, 242.0], [72.2, 242.0], [72.3, 243.0], [72.4, 244.0], [72.5, 245.0], [72.6, 245.0], [72.7, 246.0], [72.8, 247.0], [72.9, 248.0], [73.0, 248.0], [73.1, 248.0], [73.2, 248.0], [73.3, 249.0], [73.4, 249.0], [73.5, 249.0], [73.6, 250.0], [73.7, 251.0], [73.8, 252.0], [73.9, 253.0], [74.0, 253.0], [74.1, 255.0], [74.2, 255.0], [74.3, 257.0], [74.4, 258.0], [74.5, 258.0], [74.6, 259.0], [74.7, 259.0], [74.8, 259.0], [74.9, 261.0], [75.0, 261.0], [75.1, 262.0], [75.2, 264.0], [75.3, 266.0], [75.4, 266.0], [75.5, 268.0], [75.6, 268.0], [75.7, 270.0], [75.8, 273.0], [75.9, 273.0], [76.0, 275.0], [76.1, 279.0], [76.2, 283.0], [76.3, 284.0], [76.4, 287.0], [76.5, 289.0], [76.6, 291.0], [76.7, 291.0], [76.8, 294.0], [76.9, 296.0], [77.0, 297.0], [77.1, 299.0], [77.2, 299.0], [77.3, 302.0], [77.4, 304.0], [77.5, 304.0], [77.6, 305.0], [77.7, 308.0], [77.8, 309.0], [77.9, 310.0], [78.0, 310.0], [78.1, 311.0], [78.2, 312.0], [78.3, 312.0], [78.4, 314.0], [78.5, 314.0], [78.6, 315.0], [78.7, 315.0], [78.8, 316.0], [78.9, 316.0], [79.0, 316.0], [79.1, 317.0], [79.2, 318.0], [79.3, 319.0], [79.4, 319.0], [79.5, 319.0], [79.6, 320.0], [79.7, 321.0], [79.8, 323.0], [79.9, 324.0], [80.0, 324.0], [80.1, 325.0], [80.2, 326.0], [80.3, 329.0], [80.4, 331.0], [80.5, 332.0], [80.6, 332.0], [80.7, 333.0], [80.8, 335.0], [80.9, 335.0], [81.0, 335.0], [81.1, 336.0], [81.2, 339.0], [81.3, 340.0], [81.4, 341.0], [81.5, 342.0], [81.6, 345.0], [81.7, 346.0], [81.8, 346.0], [81.9, 348.0], [82.0, 349.0], [82.1, 352.0], [82.2, 352.0], [82.3, 354.0], [82.4, 355.0], [82.5, 358.0], [82.6, 360.0], [82.7, 361.0], [82.8, 363.0], [82.9, 364.0], [83.0, 365.0], [83.1, 367.0], [83.2, 369.0], [83.3, 371.0], [83.4, 375.0], [83.5, 376.0], [83.6, 378.0], [83.7, 381.0], [83.8, 383.0], [83.9, 385.0], [84.0, 385.0], [84.1, 388.0], [84.2, 389.0], [84.3, 390.0], [84.4, 392.0], [84.5, 392.0], [84.6, 393.0], [84.7, 395.0], [84.8, 399.0], [84.9, 401.0], [85.0, 403.0], [85.1, 414.0], [85.2, 416.0], [85.3, 420.0], [85.4, 427.0], [85.5, 429.0], [85.6, 439.0], [85.7, 446.0], [85.8, 451.0], [85.9, 453.0], [86.0, 455.0], [86.1, 460.0], [86.2, 465.0], [86.3, 470.0], [86.4, 472.0], [86.5, 472.0], [86.6, 479.0], [86.7, 485.0], [86.8, 486.0], [86.9, 493.0], [87.0, 493.0], [87.1, 497.0], [87.2, 498.0], [87.3, 504.0], [87.4, 505.0], [87.5, 506.0], [87.6, 510.0], [87.7, 513.0], [87.8, 519.0], [87.9, 521.0], [88.0, 522.0], [88.1, 524.0], [88.2, 524.0], [88.3, 526.0], [88.4, 531.0], [88.5, 531.0], [88.6, 533.0], [88.7, 535.0], [88.8, 545.0], [88.9, 547.0], [89.0, 548.0], [89.1, 553.0], [89.2, 553.0], [89.3, 557.0], [89.4, 558.0], [89.5, 559.0], [89.6, 565.0], [89.7, 571.0], [89.8, 590.0], [89.9, 597.0], [90.0, 598.0], [90.1, 600.0], [90.2, 613.0], [90.3, 614.0], [90.4, 619.0], [90.5, 624.0], [90.6, 639.0], [90.7, 643.0], [90.8, 658.0], [90.9, 660.0], [91.0, 678.0], [91.1, 692.0], [91.2, 716.0], [91.3, 726.0], [91.4, 736.0], [91.5, 742.0], [91.6, 776.0], [91.7, 792.0], [91.8, 802.0], [91.9, 821.0], [92.0, 824.0], [92.1, 880.0], [92.2, 894.0], [92.3, 916.0], [92.4, 929.0], [92.5, 933.0], [92.6, 949.0], [92.7, 972.0], [92.8, 987.0], [92.9, 1013.0], [93.0, 1024.0], [93.1, 1055.0], [93.2, 1089.0], [93.3, 1094.0], [93.4, 1117.0], [93.5, 1120.0], [93.6, 1136.0], [93.7, 1155.0], [93.8, 1178.0], [93.9, 1180.0], [94.0, 1185.0], [94.1, 1197.0], [94.2, 1210.0], [94.3, 1219.0], [94.4, 1270.0], [94.5, 1280.0], [94.6, 1283.0], [94.7, 1305.0], [94.8, 1316.0], [94.9, 1361.0], [95.0, 1405.0], [95.1, 1558.0], [95.2, 1646.0], [95.3, 1884.0], [95.4, 1912.0], [95.5, 1943.0], [95.6, 19844.0], [95.7, 19894.0], [95.8, 19951.0], [95.9, 20142.0], [96.0, 20156.0], [96.1, 20191.0], [96.2, 20244.0], [96.3, 20250.0], [96.4, 20252.0], [96.5, 20265.0], [96.6, 20287.0], [96.7, 20303.0], [96.8, 20309.0], [96.9, 20327.0], [97.0, 20330.0], [97.1, 20351.0], [97.2, 20354.0], [97.3, 20382.0], [97.4, 20388.0], [97.5, 20390.0], [97.6, 20406.0], [97.7, 20483.0], [97.8, 20501.0], [97.9, 20530.0], [98.0, 20647.0], [98.1, 22696.0], [98.2, 36931.0], [98.3, 37221.0], [98.4, 37396.0], [98.5, 76853.0], [98.6, 76883.0], [98.7, 76899.0], [98.8, 76910.0], [98.9, 76982.0], [99.0, 76987.0], [99.1, 77006.0], [99.2, 77011.0], [99.3, 77045.0], [99.4, 77052.0], [99.5, 77071.0], [99.6, 77169.0], [99.7, 77401.0], [99.8, 77606.0], [99.9, 77963.0], [100.0, 78522.0]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 842.0, "series": [{"data": [[0.0, 842.0], [600.0, 19.0], [700.0, 12.0], [800.0, 8.0], [900.0, 12.0], [1000.0, 8.0], [1100.0, 14.0], [1200.0, 9.0], [20300.0, 15.0], [20400.0, 5.0], [20200.0, 10.0], [20100.0, 4.0], [19900.0, 2.0], [20000.0, 1.0], [19800.0, 3.0], [1300.0, 6.0], [20500.0, 3.0], [20700.0, 1.0], [20600.0, 1.0], [1400.0, 2.0], [22600.0, 1.0], [1500.0, 1.0], [1600.0, 2.0], [100.0, 336.0], [1800.0, 3.0], [1900.0, 2.0], [2300.0, 1.0], [36800.0, 1.0], [37300.0, 1.0], [37200.0, 3.0], [36900.0, 1.0], [200.0, 212.0], [77200.0, 1.0], [300.0, 137.0], [77800.0, 1.0], [77600.0, 1.0], [77400.0, 2.0], [77100.0, 2.0], [77000.0, 9.0], [76900.0, 5.0], [76800.0, 5.0], [78500.0, 1.0], [77900.0, 1.0], [400.0, 43.0], [500.0, 51.0]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 78500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 29.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1570.0, "series": [{"data": [[0.0, 1570.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 141.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 60.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 29.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 15.160493827160495, "minX": 1.67652498E12, "maxY": 44.04571428571428, "series": [{"data": [[1.67652498E12, 22.802775748721693], [1.67652504E12, 44.04571428571428], [1.6765251E12, 15.160493827160495]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6765251E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 68.6, "minX": 2.0, "maxY": 9545.341463414634, "series": [{"data": [[2.0, 168.3], [3.0, 86.57333333333332], [4.0, 163.0232558139535], [5.0, 134.0224719101123], [6.0, 130.5], [7.0, 4718.117647058823], [8.0, 8925.886363636362], [9.0, 120.53333333333335], [10.0, 4135.800000000001], [11.0, 295.33333333333337], [12.0, 183.7619047619048], [13.0, 237.56250000000003], [14.0, 7634.1935483870975], [15.0, 177.26666666666665], [16.0, 239.94594594594594], [17.0, 2517.1176470588234], [18.0, 3418.958333333333], [19.0, 2788.066666666666], [20.0, 9545.341463414634], [21.0, 2241.1315789473683], [22.0, 6737.8], [23.0, 625.206896551724], [24.0, 6897.5], [25.0, 6872.000000000001], [26.0, 8213.800000000001], [27.0, 5315.75], [28.0, 4061.0476190476197], [29.0, 1286.5454545454547], [30.0, 765.2352941176471], [31.0, 1006.4166666666667], [32.0, 1120.4545454545455], [33.0, 1128.95], [35.0, 739.3593749999998], [34.0, 1122.45], [37.0, 2289.435483870968], [36.0, 1120.5081967213116], [38.0, 1382.0303030303035], [39.0, 687.609756097561], [40.0, 1520.6990291262139], [41.0, 987.0714285714288], [42.0, 1342.743902439024], [43.0, 2655.0], [44.0, 2009.0000000000007], [45.0, 140.10000000000002], [46.0, 2933.03448275862], [47.0, 2170.5714285714284], [48.0, 97.71428571428571], [49.0, 4108.4], [51.0, 1405.4999999999995], [50.0, 5012.875], [53.0, 167.44444444444446], [52.0, 2211.722222222222], [54.0, 610.7142857142857], [55.0, 68.6]], "isOverall": false, "label": "2359project", "isController": false}, {"data": [[26.589444444444442, 2032.5061111111117]], "isOverall": false, "label": "2359project-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 55.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 367.2, "minX": 1.67652498E12, "maxY": 22468.983333333334, "series": [{"data": [[1.67652498E12, 22468.983333333334], [1.67652504E12, 5805.416666666667], [1.6765251E12, 2155.616666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.67652498E12, 9309.2], [1.67652504E12, 2366.4], [1.6765251E12, 367.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6765251E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 435.5551497443388, "minX": 1.67652498E12, "maxY": 26211.271604938273, "series": [{"data": [[1.67652498E12, 435.5551497443388], [1.67652504E12, 2683.2085714285713], [1.6765251E12, 26211.271604938273]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6765251E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 435.5222790357926, "minX": 1.67652498E12, "maxY": 2399.84857142857, "series": [{"data": [[1.67652498E12, 435.5222790357926], [1.67652504E12, 2399.84857142857], [1.6765251E12, 505.14814814814815]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6765251E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 307.7041636230826, "minX": 1.67652498E12, "maxY": 25735.34567901235, "series": [{"data": [[1.67652498E12, 307.7041636230826], [1.67652504E12, 2598.7342857142858], [1.6765251E12, 25735.34567901235]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6765251E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 36.0, "minX": 1.67652498E12, "maxY": 37396.0, "series": [{"data": [[1.67652498E12, 20530.0], [1.67652504E12, 37396.0], [1.6765251E12, 1405.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.67652498E12, 36.0], [1.67652504E12, 36.0], [1.6765251E12, 238.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.67652498E12, 455.0], [1.67652504E12, 4112.000000000397], [1.6765251E12, 1292.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.67652498E12, 20283.1], [1.67652504E12, 37220.51], [1.6765251E12, 1405.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.67652498E12, 115.0], [1.67652504E12, 77.5], [1.6765251E12, 733.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.67652498E12, 650.0], [1.67652504E12, 20303.0], [1.6765251E12, 1348.25]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6765251E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 49.0, "minX": 1.0, "maxY": 77606.0, "series": [{"data": [[32.0, 117.0], [2.0, 929.0], [37.0, 59.0], [45.0, 545.0], [44.0, 129.0], [3.0, 362.0], [53.0, 365.0], [56.0, 228.0], [4.0, 814.5], [5.0, 51.0], [6.0, 602.0], [7.0, 547.0], [8.0, 1055.0], [9.0, 304.5], [11.0, 235.0], [14.0, 627.5], [1.0, 358.0], [18.0, 89.0], [20.0, 1145.5], [21.0, 49.0], [22.0, 72.5], [23.0, 50.5], [24.0, 66.5], [25.0, 56.0], [26.0, 91.0], [27.0, 56.0], [28.0, 85.5], [29.0, 78.0], [30.0, 61.0], [31.0, 103.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 77606.0], [2.0, 77401.0], [4.0, 77085.5], [8.0, 76883.0], [9.0, 76853.0], [5.0, 76901.0], [3.0, 77169.0], [6.0, 77043.0], [14.0, 77008.0], [7.0, 76930.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 56.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 1145.5, "series": [{"data": [[32.0, 117.0], [2.0, 929.0], [37.0, 58.5], [45.0, 545.0], [44.0, 129.0], [3.0, 362.0], [53.0, 365.0], [56.0, 228.0], [4.0, 814.5], [5.0, 51.0], [6.0, 602.0], [7.0, 547.0], [8.0, 1055.0], [9.0, 304.5], [11.0, 235.0], [14.0, 627.5], [1.0, 358.0], [18.0, 89.0], [20.0, 1145.5], [21.0, 49.0], [22.0, 72.0], [23.0, 50.5], [24.0, 66.5], [25.0, 56.0], [26.0, 91.0], [27.0, 56.0], [28.0, 85.0], [29.0, 78.0], [30.0, 61.0], [31.0, 103.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0], [2.0, 0.0], [4.0, 0.0], [8.0, 0.0], [9.0, 0.0], [5.0, 0.0], [3.0, 0.0], [6.0, 0.0], [14.0, 0.0], [7.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 56.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.9, "minX": 1.67652498E12, "maxY": 23.483333333333334, "series": [{"data": [[1.67652498E12, 23.483333333333334], [1.67652504E12, 5.616666666666666], [1.6765251E12, 0.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6765251E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.67652498E12, "maxY": 22.816666666666666, "series": [{"data": [[1.67652504E12, 0.03333333333333333], [1.6765251E12, 0.45]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.67652498E12, 22.816666666666666], [1.67652504E12, 5.8], [1.6765251E12, 0.9]], "isOverall": false, "label": "206", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6765251E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.67652498E12, "maxY": 22.816666666666666, "series": [{"data": [[1.67652498E12, 22.816666666666666], [1.67652504E12, 5.8], [1.6765251E12, 0.9]], "isOverall": false, "label": "2359project-success", "isController": false}, {"data": [[1.67652504E12, 0.03333333333333333], [1.6765251E12, 0.45]], "isOverall": false, "label": "2359project-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6765251E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.67652498E12, "maxY": 22.816666666666666, "series": [{"data": [[1.67652498E12, 22.816666666666666], [1.67652504E12, 5.8], [1.6765251E12, 0.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.67652504E12, 0.03333333333333333], [1.6765251E12, 0.45]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6765251E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

