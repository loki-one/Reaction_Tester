
function getRandomColor(){
			
			var letters = '0123456789ABCDEF'.split('');
			var color = '#';
			for (var i=0; i<6; i++){
				color += letters[Math.floor(Math.random()*16)];
			}
			return color;
		}

		function makeShapeAppear(){
			
			start = new Date().getTime();
			var top = Math.floor(Math.random()*300);
			var left = Math.floor(Math.random()*1000);
			var width = Math.floor((Math.random()*300)+50);
			
			if(Math.random() < 0.5){
				document.getElementById('shape').style.borderRadius = "50%";
			}else {
				document.getElementById('shape').style.borderRadius = "0%";
			}
			document.getElementById('shape').style.display = "block";
			document.getElementById('shape').style.top = top + "px";
			document.getElementById('shape').style.left = left + "px";
			document.getElementById('shape').style.height = width + "px";
			document.getElementById('shape').style.width = width + "px";
			document.getElementById('shape').style.backgroundColor = getRandomColor();
			
		}

		function appearAfterDelay(){
			setTimeout(makeShapeAppear, Math.random()*2000);
		}

		appearAfterDelay();

		var start = new Date().getTime();

		document.getElementById('shape').onclick = function(){

			document.getElementById('shape').style.display = "none";
			var end = new Date().getTime();
			var timeTaken = (end - start)/1000;
			document.getElementById('myTime').innerHTML = timeTaken + "s";
			appearAfterDelay();

		}