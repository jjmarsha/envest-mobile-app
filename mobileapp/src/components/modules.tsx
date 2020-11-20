const modules = [];

modules[0] = {
  index: '01',
  title: 'Investing vs. Trading',
  lesson: [
    {
      subtitle: 'What is Investing?',
      content: {
        type: 'text',
        data: ['An investment into part of a corporation and entity that entitles you to part of their earnings and assets.',
          'You place money into companies with the purpose that they will grow in value through performance and time.',
          'Essentially it is holding your money in companies for periods of time to let it grow.'
        ],
      },
      info: 'lesson info goes here',
    },
    {
      subtitle: 'Advantages of Investing',
      content: {
        type: 'bullets',
        data: ['Higher returns than savings accounts',
          'Potential for healthy, long term returns',
          'Combats inflation'],
      },
      info: 'lesson basics go here',
    },
    {
      subtitle: 'Disadvantages of Investing',
      content: {
        type: 'bullets',
        data: ['Potential risk of losses',
          'Time involved with investing',
          'Taxes'],
      },
      info: 'lesson basics go here',
    },
    {
      subtitle: 'What is trading?',
      content: {
        type: 'text',
        data: [
          'Trading is buying and selling stocks to capitalize on daily price fluctuations.',
          'Rather than holding stocks, traders try to quickly flip short changes in price.',
          'There is active trading and day trading.',
        ],
      },
      info: 'lesson assets go here',
    },
    {
      subtitle: 'Advantages of Trading',
      content: {
        type: 'bullets',
        data: ['Higher potential for profits',
          'Faster returns and gains'
        ],
      },
      info: 'lesson basics go here',
    },
    {
      subtitle: 'Disadvantages of Trading',
      content: {
        type: 'bullets',
        data: ['Time consuming',
          'Higher risk of losing money',
          'Short term risk / fluctuations',
          'Initial capital needed to begin'
        ],
      },
      info: 'lesson basics go here',
    }
  ],
  quiz: [
    {
      question: 'What is a disadvantage of trading?',
      correct: 2,
      answers: [
        'Higher potential for profits',
        'Faster returns and gains',
        'Higher risk of losing money',
        'Having a larger portfolio'
      ],
      success: 'Trading can lead to high returns but is also high risk!',
      hint: 'Remember, trading can be more volatile than investing!'
    },
    {
      question: 'What is an advantage of investing?',
      correct: 3,
      answers: [
        'Higher returns than savings accounts',
        'Potential for healthy, long term returns',
        'Combats inflation',
        'All of the above'
      ],
      success: 'Investing is a good way to have long term returns that combat inflation and earn faster than savings account interest.',
      hint: 'Try to consider each option as a component of investing!'
    },
    {
      question: 'What is the difference between investing and trading?',
      correct: 0,
      answers: [
        'Trading is more volatile than investing',
        'Trading is cooler than investing',
        'Investing helps with your credit score',
        'Trading is illegal while investing is allowed'
      ],
      success: 'Trading is defined by its volatility when compared to investing.',
      hint: 'What is the key differentiator between trading and investing?'
    }
  ]
};

modules[1] = {
  index: '02',
  title: 'How to Trade Stocks',
  lesson: [
    {
      subtitle: 'Open an investing account',
      content: {
        type: 'text',
        data: ['Open a “brokerage account”, which allows you to buy stocks, funds, and investments.',
          'Compare different brokerage accounts. Look at factors like trading commissions and account fees and investment selections to see which one is best for your profile.',]
      },
    },
    {
      subtitle: 'Create a budget for your stocks',
      content: {
        type: 'text',
        data: ['Some platforms can allow you to begin with as little as $1 to buy fractional shares, but usually you should have enough money to buy 1 share of a company you are interested in.',
          'Allocate whatever you are comfortable risking with from your paycheck, discretionary fund, savings, etc.'],
      },
    },
    {
      subtitle: 'Focusing on Long-Term Gains',
      content: {
        type: 'text',
        data: ['Remember, investing is done to create long term gains. You will not be earning money instantly, and it will grow over time!',
          'Research suitable long term investing strategies, and do not panic - let your money grow!'],
      },
    }
  ],
  quiz: [
    {
      question: 'What is a brokerage account?',
      correct: 1,
      answers: [
        'A more expensive savings account',
        'An account which allows you to buy stocks, funds, and investments',
        'An account which allows you to send money',
        'The venmo username of your uncle'
      ],
      success: 'Brokerage accounts allow for you to start investing in multiple types of assets!',
      hint: 'Remember, how would you open an investment account?'
    },
    {
      question: 'What type of goals do you set for investing?',
      correct: 3,
      answers: [
        'Physical Goals',
        'Flex Potential',
        'Short Term',
        'Long Term'
      ],
      success: 'Long term goals will help guide your investing even if the market has a bad day!',
      hint: 'Think about trading versus investing!'
    },
    {
      question: 'How much money do you need to start investing?',
      correct: 0,
      answers: [
        '$1',
        '$1000',
        '$1,000,000',
        '$500,000'
      ],
      success: 'You can start with as little as $1 to get you started on your investing journey!',
      hint: 'Recall fraction shares!'
    },
  ]
};

export {modules};
