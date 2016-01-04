// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<p>Think you're ready to be a Certified Credit Counselor? Take our 30 Question quiz!</p>",
        "results": "<h5>Learn More</h5><p>Coming soon....</p>",
        "level1":  "ACE Ready",
        "level2":  "ACE Contender",
        "level3":  "ACE Amateur",
        "level4":  "ACE Newb",
        "level5":  "Better luck next time..." // no comma here
    },
    "questions": [
		        { // Question 1 - Multiple Choice, Single True Answer
		            "q": "A budget is ?",
		            "a": [
		                {"option": "an accounting of incomes and expenses for a certain length of time.",      "correct": true},
		                {"option": "a daily, weekly or monthly spending record.",     "correct": false},
		                {"option": "another name for a net worth statement.",      "correct": false},
		                {"option": "a list of cost cutting ideas.",     "correct": false} // no comma here
		            ],
		            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
		            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" 
		            
		            // no comma here
		        },
		        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
		            "q": "Discretionary expenses are ?",
		            "a": [
		                {"option": "periodic bills like insurance and taxes.",      "correct": false},
		                {"option": "fixed amounts you pay each month.",     "correct": false},
		                {"option": "purchases an individual has complete control over.",      "correct": true},
		                {"option": "bills you do not have to pay.",     "correct": false} // no comma here
		            ],
		            "select_any": true,
		            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
		            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
		        },
		        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
		            "q": "Secured debts are ?",
		            "a": [
		                {"option": "costs associated with housing and food.",      "correct": false},
		                {"option": "loans backed by collateral such as mortgages and auto loans.",     "correct": true},
		                {"option": "usually loans you pay back in one lump sum.",      "correct": false},
		                {"option": "loans granted based entirely on an individual’s credit score.",     "correct": false} // no comma here
		            ],
		            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
		            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
		        },
		        { // Question 4
		            "q": "Fixed expenses are those expenses that ?",
		            "a": [
		                {"option": "remain the same from month to month.",      "correct": true},
		                {"option": "are cut or reduced when budgeting.",     "correct": false},
		                {"option": "are essential for living.",      "correct": false},
		                {"option": "you can never change.",     "correct": false} // no comma here
		            ],
		            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
		            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
		        },
		        { // Question 5
		            "q": "Net income is ?",
		            "a": [
		                {"option": "income before taxes.",      "correct": false},
		                {"option": "income seized by the bank for unpaid loans.",     "correct": false},
		                {"option": "income from a second household wage or salary.",      "correct": false},
		                {"option": "take home income after deductions.",     "correct": true} // no comma here
		            ],
		            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
		            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
		        },
		        { // Question 6
            "q": "Debt-to-income ratio is a calculation that shows you ?",
            "a": [
                {"option": "how much money you will have after all debts are paid",      "correct": false},
                {"option": "how much income you need to take out a loan.",     "correct": false},
                {"option": "the amount of debt you are carrying in relation to your income.",      "correct": true},
                {"option": "the amount of income currently going to pay off debts.",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 7
            "q": "A spending record is ?",
            "a": [
                {"option": "part of a credit-card bill that lists purchases made.",      "correct": false},
                {"option": "a list of purchases made throughout the day.",     "correct": true},
                {"option": "part of a credit report listing use of credit.",      "correct": false},
                {"option": "another name for a spending plan.",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
                { // Question 8
            "q": "Rebecca uses reflective listening to provide non-judgmental feedback to her clients. When her client, Robert, told her that his current debt was over $50,000 and he was about to loose his job, an appropriate reflecting statement would be:",
            "a": [
                {"option": "That’s terrible!",      "correct": false},
                {"option": "I know what you’re going through.”",     "correct": false},
                {"option": "It sounds like you’re worried about your debt especially now that you’re loosing your job.",      "correct": true},
                {"option": "If I were you, I would start panicking now.",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
                { // Question 9
            "q": "Josh uses non-reflective listening to encourage client communication. Which of the following is NOT an example of non-reflective listening ?",
            "a": [
                {"option": "Yes",      "correct": false},
                {"option": "Go On",     "correct": false},
                {"option": "What?",      "correct": true},
                {"option": "I see",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
                { // Question 10
            "q": "Caroline acknowledges her client’s human as well as her business needs by ?",
            "a": [
                {"option": "handing her a brochure",      "correct": false},
                {"option": "multi-tasking",     "correct": false},
                {"option": "showing respect and acceptance",      "correct": true},
                {"option": "providing lots of facts and figures.",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
                { // Question 11
            "q": "Kyle likes to start an interview by talking about the weather or the latest sporting news. This type of communication is called ?",
            "a": [
                {"option": "cognitive",      "correct": false},
                {"option": "social",     "correct": true},
                {"option": "persuasive",      "correct": false},
                {"option": "distracting",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
                { // Question 12
            "q": "Good rapport requires the following three conditions: ",
            "a": [
                {"option": "Empathy, genuineness, and positive regard",      "correct": true},
                {"option": "Empathy, genuineness, and cognition",     "correct": false},
                {"option": "Genuineness, positive regard, and persuasion",      "correct": false},
                {"option": "Expression, cognition, and positive regard",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 13
		        
            "q": "My wife and I are finalizing our divorce this month. Not only does she get custody of the kids, but she also gets the house! On top of that, I have to pay child support. We were on a tight budget before the divorce. My job isn’t great, but it has made ends meet in the past. Anyways, I don’t know if I can handle a second job now in addition to all this change. But I don’t know how I am going to afford child support payments, the cost of finding a new place to live, and furnishings for a new home. My creditcard balances are already high, and I don’t think I would be approved for a second loan. What are my options? Of the counselor responses listed below, which one is an appropriate reflective statement?",
            "a": [
                {"option": "It sounds like with all these new changes happening all at once, you are not sure how you will be able to afford all the bills.",      "correct": true},
                {"option": "You are going through a lot of changes right now in your life. This has affected your ability to keep up with payments, and you are unsure how you will make ends meet. I think you should seek a therapist.",     "correct": false},
                {"option": "So the point is you have a lot on your plate. Maybe you should think about moving in with a friend for a while.",      "correct": false},
                {"option": "So the point is your wife is being completely unreasonable. How does she expect you to afford all those bills?",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 14
            "q": " Jeff has been turned down for a home loan within the last 60 days. He mailed his written proof to the credit-reporting agencies to receive his free credit report. It has been over three months and Jeff has not received his credit report. Joe is entitled to a free report under which law?",
            "a": [
                {"option": "The Fair Credit Reporting Act",      "correct": true},
                {"option": "The Fair Credit Billing Act",     "correct": false},
                {"option": "The Truth in Lending Act",      "correct": false},
                {"option": "The Fair Debt Collection and Practices Act",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 15
            "q": "On last month’s credit-card bill, Erica found an error. Which law helps consumers dispute billing errors?",
            "a": [
                {"option": "The Truth in Lending Act",      "correct": false},
                {"option": "The Fair Credit Billing Act",     "correct": true},
                {"option": "The Fair Housing Act",      "correct": false},
                {"option": "The Fair Debt and Collection Practices Act",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 16
            "q": "Lenders must notify you within 30 days whether your loan application has been accepted, rejected or found incomplete. Which federal legislation requires this?",
            "a": [
                {"option": "The Truth in Lending Act",      "correct": false},
                {"option": "The Fair Housing Act",     "correct": false},
                {"option": "The Equal Credit Opportunity Act",      "correct": true},
                {"option": "The Fair Debt Collection Practices Act",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 17
            "q": "The interest rate on your credit card can suddenly increase if:",
            "a": [
                {"option": "you make one late payment",      "correct": false},
                {"option": "you exceed your credit limit",     "correct": false},
                {"option": "your card has a variable rate",      "correct": false},
                {"option": "all of the above",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 18
            "q": "Your credit score may be ___________ at each of the three main credit-reporting agencies.",
            "a": [
                {"option": "cross-referenced",      "correct": false},
                {"option": "compared",     "correct": false},
                {"option": "different",      "correct": true},
                {"option": "discharged",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 19
            "q": "Regina decided it would be in her best interest to close three of her highinterest credit cards. Thirty days after closing the cards, she requested copies of her credit reports. Next to the account information, Regina wanted to make sure it denoted:",
            "a": [
                {"option": "Closed by creditor.",      "correct": false},
                {"option": "Closed due to insufficient funds.",     "correct": false},
                {"option": "Closed at consumer’s request.",      "correct": true},
                {"option": "Closed due to high interest rates.",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 20
            "q": "Which of the following is NOT part of a credit report?",
            "a": [
                {"option": "Personal identifying information",      "correct": false},
                {"option": "Accounts summary",     "correct": false},
                {"option": "Level of education",      "correct": true},
                {"option": "Inquiries",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 21
            "q": "Which category has the greatest impact on a FICO score ?",
            "a": [
                {"option": "credit payment history",      "correct": true},
                {"option": "amounts owed",     "correct": false},
                {"option": "length of credit history",      "correct": false},
                {"option": "credit mix and new credit",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 22
            "q": "Spending too much, saving too little and abusing credit describes?",
            "a": [
                {"option": "a conscientious consumer",      "correct": false},
                {"option": "a behavioral debtor",     "correct": true},
                {"option": "a self-employed debtor",      "correct": false},
                {"option": "an insolvency event",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 23
            "q": "A person who tries to create dependency in others by showering them with perceived necessities is a:",
            "a": [
                {"option": "narcissistic spender",      "correct": false},
                {"option": "frugal spender",     "correct": false},
                {"option": "compulsive spender",      "correct": false},
                {"option": "co-dependent spender",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 24
            "q": "Britney explained to her counselor why she had purposely “maxed out” her husband’s credit card. “He’s always off on some business trip. So I decided to treat myself to a cruise.” Britney is most likely a _________________ spender.",
            "a": [
                {"option": "compulsive",      "correct": false},
                {"option": "co-dependant",     "correct": false},
                {"option": "narcissistic",      "correct": false},
                {"option": "revenge",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 25
            "q": "After keeping a spending record for one month, Carla noticed an expensive habit. Carla had a tendency to grab items in the checkout line such as gum, candy and magazines when she buys her morning coffee at the convenience store. This type of spending indicates that she is a(n):",
            "a": [
                {"option": "impulsive buyer",      "correct": true},
                {"option": "passive buyer",     "correct": false},
                {"option": "ulterior motive spender",      "correct": false},
                {"option": "esteem spender",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 26
            "q": "What is net worth?",
            "a": [
                {"option": "The sum of the total amount of your assets and the total amount of your liabilities.",      "correct": false},
                {"option": "The sum of the total amount of your assets and the total amount of your annual income.",     "correct": false},
                {"option": "The difference between the total amount of your account balance and the total amount of your liabilities.",      "correct": false},
                {"option": "The difference between the total amount of your assets and the total amount of your liabilities.",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 27
            "q": "Two complimentary actions that can reverse a negative debt-to-income ratio are decreasing debt and ______________________.",
            "a": [
                {"option": "decreasing available credit",      "correct": false},
                {"option": "increasing income",     "correct": true},
                {"option": "decreasing the number of bank accounts",      "correct": false},
                {"option": "increasing credit scores",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 28
            "q": "What is the first step in the problem-solving process?",
            "a": [
                {"option": "Awareness of the problem",      "correct": true},
                {"option": "Decision making",     "correct": false},
                {"option": "Consideration of options",      "correct": false},
                {"option": "Goal setting",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 29
            "q": "Solving problems through counseling consists of three stages. Which of the following is NOT one of these stages?",
            "a": [
                {"option": "Gathering the facts",      "correct": false},
                {"option": "Setting goals",     "correct": false},
                {"option": "Assigning blame",      "correct": true},
                {"option": "Developing an action plan",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
		        { // Question 30
            "q": "Accomplishing short-term goals",
            "a": [
                {"option": "increases motivation to reach long-term goals",      "correct": true},
                {"option": "decreases motivation to reach long-term goals",     "correct": false},
                {"option": "distracts from accomplishing long-term goals",      "correct": false},
                {"option": "creates a false sense of accomplishment",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        }

    ]
};
