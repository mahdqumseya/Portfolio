$(document).ready(function(){
 $('.header').height($(window).height());

 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)
  
 })



//Getting canvas ID
var frontendCanvas = document.getElementById("frontend-chart");
var backendCanvas = document.getElementById("backend-chart");
var softskillsCanvas = document.getElementById("softskills-chart");

//Globals for chart config
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 16;

//frontend data
var frontendData = {
    labels: [
		"HTML5",
		"JavaScript",
		"CSS",
    ],
    datasets: [
        {
            data: [7,9,3],
            backgroundColor: [
				"#8463FF",
				"#FF6384",
                "#63FF84"
            ]
        }]
};

// backend data 
var backendData = {
    labels: [
		"Relationship Building",
		"SaaS",
		"Negotiation Skills",
		
    ],
    datasets: [
        {
            data: [8,3,8],
            backgroundColor: [
				"#8463FF",
				"#FF6384",
                "#63FF84"
            ]
        }]
};

// softskills data
var softskillsData = {
    labels: [
		"Git",
		
		"Heroku",
		"Wix"
		
    ],
    datasets: [
        {
            data: [8,6,8,],
            backgroundColor: [
				"#8463FF",
				"#FF6384",
				"#63FF84"
            ]
        }]
};

var pieChart = new Chart(backendCanvas, {
  type: 'pie',
  data: backendData
});

var pieChart = new Chart(frontendCanvas, {
	type: 'pie',
	data: frontendData
});

var pieChart = new Chart(softskillsCanvas, {
	type: 'pie',
	data: softskillsData
});



let inViewTopChart = false;
let inViewBottomChart = false;
let inViewSVG = false;

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
	
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {

    if (isScrolledIntoView('#frontend-chart')) {

        if (inViewTopChart) { return; }
        inViewTopChart = true;

		new Chart(frontendCanvas, {
			type: 'pie',
			data: frontendData
		});
		new Chart(backendCanvas, {
			type: 'pie',
			data: backendData
		});
		
	} else {
		inViewTopChart = false;
	}

	if(isScrolledIntoView('#softskills-chart')){
		if (inViewBottomChart) { return; }
		inViewBottomChart = true
		new Chart(softskillsCanvas, {
			type: 'pie',
			data: softskillsData
		});
	}else {
		inViewBottomChart = false;
	}
	
	if(isScrolledIntoView('#svg')){
		let svg = `<svg width="400" height="240" xmlns="http://www.w3.org/2000/svg" id="svg">
		<g id="group1" y="0" x="0" visibility="visible">
			<rect id="line1" width="50" height="20" style="fill:#3092ec" x="0" y="0" rx="10" ry="10">
				<animate attributeName="width" from="50" to="350" dur="0.3s" fill="freeze" id="line1_anim" />
			</rect>
			<rect id="line2" width="0" height="20" style="fill:#ab6cfe" x="30" y="30" rx="10" ry="10">
				<animate attributeName="width" from="0" to="200" dur="0.3s" fill="freeze" begin="line1_anim.end" id="line2_anim" />
			</rect>
			<rect id="line3" width="0" height="20" style="fill:#fd8085" x="60" y="60" rx="10" ry="10">
				<animate attributeName="width" from="0" to="160" dur="0.3s" fill="freeze" begin="line2_anim.end" id="line3_anim" />
			</rect>
			<rect id="line4" width="0" height="20" style="fill:lightgrey" x="90" y="90" rx="10" ry="10">
				<animate attributeName="width" from="0" to="200" dur="0.2s" fill="freeze" begin="line3_anim.end" id="line4_anim" />
			</rect>
			<rect id="line5" width="0" height="20" style="fill:lightgrey" x="90" y="120" rx="10" ry="10">
				<animate attributeName="width" from="0" to="200" dur="0.2s" fill="freeze" begin="line4_anim.end" id="line5_anim" />
			</rect>
			<rect id="line6" width="0" height="20" style="fill:#fd8085" x="60" y="150" rx="10" ry="10">
				<animate attributeName="width" from="0" to="120" dur="0.2s" fill="freeze" begin="line5_anim.end" id="line6_anim" />
			</rect>
			<rect id="line7" width="0" height="20" style="fill:#ab6cfe" x="30" y="180" rx="10" ry="10">
				<animate attributeName="width" from="0" to="90" dur="0.2s" fill="freeze" begin="line6_anim.end" id="line7_anim" />
			</rect>
			<rect id="line8" width="0" height="20" style="fill:#3092ec" x="0" y="210" rx="10" ry="10">
				<animate attributeName="width" from="50" to="130" dur="0.3s" fill="freeze" begin="line7_anim.end" id="line8_anim" />
			</rect>

			<animateMotion from="0,0" to="0,-250" dur="2s" begin="line8_anim.end" repeatCount="indefinite" />

		</g>

		<g id="group2">
			<rect id="line9" width="0" height="20" style="fill:#3092ec" x="0" y="250" rx="10" ry="10">
				<animate attributeName="width" from="0" to="350" dur="0.25s" fill="freeze" id="line9_anim" begin="line8_anim.end;line9_anim.end+1.75" />

			</rect>

			<rect id="line10" width="0" height="20" style="fill:#ab6cfe" x="30" y="280" rx="10" ry="10">
				<animate attributeName="width" from="0" to="200" dur="0.25s" fill="freeze" begin="line9_anim.end" id="line10_anim" />
			</rect>
			<rect id="line11" width="0" height="20" style="fill:#fd8085" x="60" y="310" rx="10" ry="10">
				<animate attributeName="width" from="0" to="160" dur="0.25s" fill="freeze" begin="line10_anim.end" id="line11_anim" />
			</rect>
			<rect id="line12" width="0" height="20" style="fill:lightgrey" x="90" y="340" rx="10" ry="10">
				<animate attributeName="width" from="0" to="200" dur="0.25s" fill="freeze" begin="line11_anim.end" id="line12_anim" />
			</rect>
			<rect id="line13" width="0" height="20" style="fill:lightgrey" x="90" y="370" rx="10" ry="10">
				<animate attributeName="width" from="0" to="200" dur="0.25s" fill="freeze" begin="line12_anim.end" id="line13_anim" />
			</rect>
			<rect id="line14" width="0" height="20" style="fill:#fd8085" x="60" y="400" rx="10" ry="10">
				<animate attributeName="width" from="0" to="120" dur="0.25s" fill="freeze" begin="line13_anim.end" id="line14_anim" />
			</rect>
			<rect id="line15" width="0" height="20" style="fill:#ab6cfe" x="30" y="430" rx="10" ry="10">
				<animate attributeName="width" from="0" to="90" dur="0.25s" fill="freeze" begin="line14_anim.end" id="line15_anim" />
			</rect>
			<rect id="line16" width="0" height="20" style="fill:#3092ec" x="0" y="460" rx="10" ry="10">
				<animate attributeName="width" from="0" to="130" dur="0.25s" fill="freeze" begin="line15_anim.end" id="line16_anim" />
			</rect>

			<animateMotion from="0,0" to="0,-250" dur="2s" begin="2s" id="scroll_anim" repeatCount="indefinite" />

			<!-- <set attributeName="visibility" attributeType="CSS" to="hidden" begin="4s" fill="freeze"/>   -->
		</g>

	</svg>`

		if (inViewSVG) { return; }
		inViewSVG = true;
		$('#svg').append(svg);
	}
});



$('.about-button').hover(()=> {
	$(".down-arrow").attr("src","images/white-down-arrow.svg");
})

$('.about-button ').mouseout(()=> {
	$(".down-arrow").attr("src","images/down-arrow.svg");
})

$('.down-arrow').hover(()=> {
	let white = "images/white-down-arrow.svg";
	let blue = "images/down-arrow.svg";
	if(	$(".down-arrow").attr("src") == blue)
	$(".down-arrow").attr("src") === blue ? $(".down-arrow").attr("src", white) : $(".down-arrow").attr("src", blue); 
});




})

function readMore(num) {
	/* Checks to see which card */

	if (num === 1){ 
		var moreText = document.getElementById("more1");
		var btnText = document.getElementById("myBtn1");
		var dots = document.getElementById("dots1");
	}
	else if (num === 2){
		var moreText = document.getElementById("more2");
		var btnText = document.getElementById("myBtn2");
		var dots = document.getElementById("dots2");
	}
	else {
		var moreText = document.getElementById("more3")
		var btnText = document.getElementById("myBtn3");
		var dots = document.getElementById("dots3");

	}


	
	

	if (dots.style.display === "none") {
    	dots.style.display = "inline";
    	btnText.innerHTML = "Read more";
    	moreText.style.display = "none";
	}

	else {
  		dots.style.display = "none";
    	btnText.innerHTML = "Read less";
    	moreText.style.display = "inline";
	}
} 


