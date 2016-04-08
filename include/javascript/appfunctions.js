	
	var glbAntwoord;
	var glbAantalGoed = 0;
	var glbAantalVragen = 0;
	var glbTafel;
	var glbTimer = 0;
	var glbVolgorde = [];
	var glbMyTimer;
	
	
	
	function MakeTafels()
	{
		var sTafels = [];
		for (iTafel = 1; iTafel < 11; iTafel++) 
		{ 
			sTafels += "<span>" + iTafel + "</span>";
		}
		
		$(".tafelspanel").append(sTafels);
	}
	
	function GoBackToMainMenu()
	{
		glbAntwoord="";
		glbAantalGoed = 0;
		glbAantalVragen = 0;
		glbTafel = 0;
		$(".antwoord").html("");
		
		$(".homepage").show();
		$(".tafelpanel").hide();
		$(".nummerbord").hide();
		$(".finishpanel").hide();
		
	}
	
	function MakeNummerbord()
	{
		var sNummers = "";
		for (iNummer = 1; iNummer < 11; iNummer++) 
		{ 
			iShowNumber = iNummer;
			
			if (iNummer == 10) 
			{
				iShowNumber = 0;
			}
			sNummers += "<span>" + iShowNumber + "</span>";
		}
		
		$(".nummerbord").append(sNummers);
	}
	
	
	function GoToTafel(iTafel)
	{
		clearInterval(glbMyTimer);
		glbTimer = 0;
		glbTafel = iTafel;

		$(".homepage").hide();
		$(".tafelpanel").show();
		$(".nummerbord").show();
		$(".timerpanel").html("0");
		$(".tafelpanel h2 span").html(iTafel);
		
		$(".aantalgoedeantwoorden").html("0");
		
		glbVolgorde = [1,2,3,4,5,6,7,8,9,10];
		
		var item = glbVolgorde[Math.floor(Math.random()*glbVolgorde.length)];
		
		GoToSum(item,iTafel);
		Timer();
	}
	
	
	function GoToSum(iNumber, iTafel)
	{
		if (iNumber == -1)
		{
			clearInterval(glbMyTimer);
			
			$(".finishpanel").show();
			$(".aantalgoed").html(glbAantalGoed);
			$(".aantalvragen").html(glbAantalVragen);
			$(".timer").html(glbTimer);
			glbTimer = 0;
		}
		else
		{
			$(".getal2").html(iTafel);

			$(".getal1").html(iNumber);
			$(".getal2").html(iTafel);
			glbAntwoord = iNumber * iTafel;
			glbAantalVragen = glbAantalVragen + 1;
			$(".aantalvragen").html(glbAantalVragen);
		}
	}
	
	
	function CheckSum()
	{
		if (glbAntwoord == $(".antwoord").html())
		{
			glbAantalGoed = glbAantalGoed + 1;
			$(".checkpanel").css("backgroundColor","green");
			$(".aantalgoedeantwoorden").html(glbAantalGoed);
		}
		else
		{
			$(".checkpanel").css("backgroundColor","red");
		}
		$(".checkpanel").fadeIn(100);
		$(".antwoord").html("");
				
		//zoek vraagnr in array
		var itemvraag = glbVolgorde.indexOf(parseInt($(".getal1").html()));
		//verwijder antwoord uit array

		var removedItems = glbVolgorde.splice(itemvraag,1); 
		
		for (y = 0; y < glbVolgorde.length; y++) 
		{
			console.log(glbVolgorde[y]);
		}
		
		if (glbVolgorde.length > 0)
		{
			// selecteer willekeurig nieuwe vraag
			var item = glbVolgorde[(Math.floor(Math.random()*glbVolgorde.length))];
			
		}
		else
		{
			item = -1;
		}
		
		
		setTimeout(function()
		{ 
			$(".checkpanel").fadeOut(100);
			GoToSum(item, glbTafel); 
		},100);
	}
	
	function MakeAntwoord(iNummer)
	{
		$(".antwoord").append(iNummer);
	}
	
	function ClearAntwoord()
	{
		$(".antwoord").html("");
	}
	
	
	function Timer(bActie)
	{
		glbMyTimer = setInterval(function()
		 { 
			glbTimer = glbTimer + 1; 
			$(".timerpanel").html(glbTimer);
		 }, 1000);
	}
	