export default [
        {
            'question': {
                'title': 'Level 1',
                'subtitle': 'Patterns and flags', 
                'description': 'Write a regex that matches the first "will" in the text below',
                'text': 'We will, we will, rock you!',
                'type': 'regex',
                'difficulty': 'easy'
            },
            'answer': {
                'correct': '/will/',
                'match': ['will'],
                'comment': 'solution should simply be: /will/'
            },
            'levelCode': 'test1'
        },
        {
            'question': {
                'title': 'Level 2',
                'subtitle': 'Patterns and flags', 
                'description': 'Match both occurences of "will" in the text below',
                'text': 'We will, we will, rock you!',
                'type': 'regex',
                'difficulty': 'easy'
            },
            'answer': {
                'correct': '/will/g',
                'match': ['will', 'will'],
                'comment': 'solution should use the global flag "g" /will/g'
            },
            'levelCode': 'test2'
        },
        {
            'question': {
                'title': 'Level 3',
                'subtitle': 'Patterns and flags', 
                'description': 'Write a regex that matches both "We" and "we" in the text below.',
                'text': 'We will, we will, rock you!',
                'type': 'regex',
                'difficulty': 'easy'
            },
            'answer': {
                'correct': '/we/gi',
                'match': ['We', 'we'],
                'comment': 'solution should use the case insensitive flag "i" and the global flag "g": /we/gi'
            },
            'levelCode': 'test3'
        },
        {
            'question': {
                'title': 'Level 4',
                'subtitle': 'Character classes', 
                'description': 'Write a regex that takes a phonenumber of this format: +7(903)-123-45-67 and returns only the digits. like: 79031234567 in this example'  ,
                'text': 'We will, we will, rock you!',
                'type': 'regex',
                'difficulty': 'easy'
            },
            'answer': {
                'correct': '/\\d/g',
                'match': ['7', '9', '0', '3', '1', '2', '3', '4', '5', '6', '7'],
                'comment': 'solution should use the digit character class "\\d" the global flag g: /\d/gi'
            },
            'levelCode': 'test4'
        },
        {
            'question': {
                'title': 'Level 5',
                'subtitle': 'Character classes - inverse classes', 
                'description': 'What\'s the character class that matches every characters EXCEPT a digit?'  ,
                'text': '',
                'type': 'text',
                'difficulty': 'easy'
            },
            'answer': {
                'correct': '\\D',
                'match': [],
                'comment': ''
            },
            'levelCode': 'test5'
        },
        {
            'question': {
                'title': 'Level 6',
                'subtitle': 'Anchors', 
                'description': 'What\'s the character class that matches every characters EXCEPT a digit?'  ,
                'text': '',
                'type': 'text',
                'difficulty': 'easy'
            },
            'answer': {
                'correct': '\\D',
                'match': [],
                'comment': ''
            },
            'levelCode': 'test5'
        },
    ]
    