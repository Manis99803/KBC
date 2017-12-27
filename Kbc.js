question=["What are the componenets of Water?","Who was the first batsman to score 200 in ODI cricket?",
"Who is known as father of the Computer?","Who is the current Prime Minister India?",
"Which is the largest state in India (Area wise)?",
"Who is known as the father of Economics?","1meter is eaquivalnet to how many centimeters?",
"Which is the capital city of India?","Who was the founder of Mughul Dynasty?",
"What is the minimum age qualification to become Prime Minister in India?",
"Who was the inventor of C Programming Language",
"Whose Birthday is celebrated as Children's day in India?"]
opt=[["Hydrogen,Sodium","Hydrogen,Nitrogen","Hydrogen,Carbon","Hydrogen,Oxygen"],
["Sachin Tendulkar","Rohit Sharma","Virender Sehwag","Chris Gayle"],
["Charle Babbage","Lady AdaLovelace","Bill Gates","Steve Jobes"],
["Narendra Modi","Manmohan Singh","Rahul Gandhi","Sonia Gandhi"],
["Madhya Pradesh","Maharastra","Rajasthan","Andhra Pradesh"],
["Adam Smith","Lionel Robbins","Raghuram Rajan","Smith"],
["100cm","1000cm","100mm","10cm"],
["Delhi","Bangalore","Mumbai","Kolkata"],
["Ibrahim Lodi","Babar","Akbar","Shahjahan"],
["25yrs","30yrs","18yrs","35yrs"],
["Dennnis Ritchie","Tolstoy","Linus","Zuckerberg"],
["Jawaharlal Nehru","Modi","Lal Bahadur Shastri","Ramkrishan"]]

flipQuestion=["Which is the highest civilian award of India?"]
flipQuestionOption=["Bharat Ratna","PadmaBhusan","PadmaVibhusan","PadmaShri"]
flipAnswer=["Bharat Ratna"]
var obj={}
answer=["Hydrogen,Oxygen","Sachin Tendulkar","Charle Babbage",
"Narendra Modi","Rajasthan","Adam Smith","100cm","Delhi","Babar","25yrs","Dennnis Ritchie",
"Jawaharlal Nehru"]
count=0
option_answer=0
question_count=1
amount_variable=1
fiftyFifty=0
fiftyCounter=0
flipCounter=0
flipSet=0
double=0
doubleCount=0
questionSelect=0
doubleLifeLine=0
var gameStart=1
if(gameStart==1)
{
	document.getElementById("one_1").innerHTML="1."+opt[count][0]
	document.getElementById("two_1").innerHTML="2."+opt[count][1]
	document.getElementById("three_1").innerHTML="3."+opt[count][2]
	document.getElementById("four_1").innerHTML="4."+opt[count][3]
	document.getElementById("Main").innerHTML=question_count+"."+question[0]
	document.getElementById("amount1").style.backgroundColor="yellow"
	question_count++;
	count++;
	gameStart=0
}
obj.click=function()
{

	if(questionSelect==0 && double==0)
		{
			alert("In click function")
			this.style.backgroundColor="yellow"
			id=this.id
			option=this.children[0]
			questionSelect=1
			if(flipSet==0)
			{
				setTimeout(check,2000)
				function check()
				{
					option=option.innerHTML.split('.')
					number=option[0];
					if(option[1]==answer[option_answer])
					{
						document.getElementById(id).style.backgroundColor="green"
						document.getElementById("amount"+(amount_variable)).style.backgroundColor="#333"
						document.getElementById("A"+(amount_variable)).style.color="white"
						amount_variable++;
						option_answer++;
						setTimeout(obj.next,2000)
					}
					else
					{
						document.getElementById(id).style.backgroundColor="red"
						if(amount_variable==1)
						{
							alert("You have won Rs."+0)
							
						}
						else
						{
							amount=document.getElementById("A"+(amount_variable-1)).innerHTML
						
							var amountString=''
							for(var i=2;i<amount.length;i++)
							{
								if(amount.charCodeAt(i)>=48 && amount.charCodeAt(i)<=57)
								{
									amountString=amountString+amount[i]
								}
							}
							alert("You have won Rs."+amountString)
						}

					}
				}
			}
		}
		else if(double==1)
		{

			this.style.backgroundColor="yellow"
			id=this.id
			option=this.children[0]
			questionSelect=1
			setTimeout(check,2000)
			function check()
			{
				option=option.innerHTML.split('.')
				number=option[0];
				if(option[1]==answer[option_answer])
				{
					document.getElementById(id).style.backgroundColor="green"
					document.getElementById("amount"+(amount_variable)).style.backgroundColor="#333"
					document.getElementById("A"+(amount_variable)).style.color="white"
					amount_variable++;
					option_answer++;
					setTimeout(obj.next,2000)
					flipSet=0;
					double=0;
					questionSelect=0;

				}
				else
				{
					document.getElementById(id).style.backgroundColor="purple"
				}
		}
		if(doubleCount!=2)
		{
			doubleCount++
		}
		else
		{
			flipSet=0;
			double=0;
			questionSelect=0;
		}
	}
			else
			{

				setTimeout(check,2000)
				function check()
				{
					option=option.innerHTML.split('.')
					number=option[0];
		
					if(option[1]==flipAnswer[0])
					{

						document.getElementById(id).style.backgroundColor="green"
						document.getElementById("amount"+(amount_variable)).style.backgroundColor="#333"
						document.getElementById("A"+(amount_variable)).style.color="white"
						amount_variable++;
						option_answer++;
						setTimeout(obj.next,2000)
					}
				}	
				flipSet=0

			}
}


var select=document.querySelectorAll("div.option")
for(i=0;i<select.length;i++)
{
	select[i].addEventListener("click",obj.click,false)
}

obj.next=function()
{
	questionSelect=0
	document.getElementById("amount"+amount_variable).style.backgroundColor="yellow"
	document.getElementById("one_1").innerHTML="1."+opt[count][0]
	document.getElementById("two_1").innerHTML="2."+opt[count][1]
	document.getElementById("three_1").innerHTML="3."+opt[count][2]
	document.getElementById("four_1").innerHTML="4."+opt[count][3]
	document.getElementById("Main").innerHTML=question_count+"."+question[count]
	question_count++;
	count++;
	var select=document.querySelectorAll("div.option")
	for(i=0;i<select.length;i++)
	{
		select[i].style.backgroundColor="white"
	}

}
obj.fifty_fifty=function()
{
	if(fiftyFifty==0)
	{
		var counter=count-1
		var getQuestion=question[counter];
		var getOption=opt[counter]
		var getOptionChoice=answer[counter];
		var deleteCount=0
		number_count=[]
		var j=0,i,set=0;
		while(deleteCount!=2)
		{

			var number=(Math.floor(4*Math.random()))
			if(number_count.length==0)
			{
				number_count[i]=number
				if(getOption[number]!=getOptionChoice)
				{
					switch(number+1)
					{
						case 1: if(document.getElementById("one_1").innerHTML!='')
								{
									document.getElementById("one_1").innerHTML="";
									deleteCount++;
								}
								break;
						case 2: if(document.getElementById("two_1").innerHTML!='')
								{
									document.getElementById("two_1").innerHTML="";
									deleteCount++;
								}	
								break;
						case 3: if(document.getElementById("three_1").innerHTML!='')
								{
									document.getElementById("three_1").innerHTML="";
									deleteCount++;
								}
								break;
						case 4: if(document.getElementById("four_1").innerHTML!='')
								{
									document.getElementById("four_1").innerHTML="";
									deleteCount++;
								}
								break;
					}
				}
			}
		}
		fiftyFifty=1
	}
	else
	{
		alert("You have already used this lifeline")
		fiftyCounter++;
		if(fiftyCounter==2)
		{
			obj.exit()
		}

	}
}

obj.flip=function()
{
	if(flipCounter==0)
	{	
		var questioncount=question_count-1
		document.getElementById("one_1").innerHTML="1."+flipQuestionOption[0]
		document.getElementById("two_1").innerHTML="2."+flipQuestionOption[1]
		document.getElementById("three_1").innerHTML="3."+flipQuestionOption[2]
		document.getElementById("four_1").innerHTML="4."+flipQuestionOption[3]
		document.getElementById("Main").innerHTML=questioncount+"."+flipQuestion[0]
		flipSet=1
		flipCounter=1
	}
	else
	{
		alert("You have already used this lifeline")
	}

}
obj.double=function()
{
	if(doubleLifeLine==0)
	{
		double=1
		doubleLifeLine=1
	}
	else
		{
			alert("You have use the life line already")
			doubleLifeLine=1
		}
	
}

var lifeline_fifty_fifty=document.querySelector("#fifty_fifty")
lifeline_fifty_fifty.addEventListener("click",obj.fifty_fifty,false)

var flip_question=document.querySelector("#Flip")
flip_question.addEventListener("click",obj.flip,false)

var Double=document.querySelector("#Double")
Double.addEventListener("click",obj.double,false)