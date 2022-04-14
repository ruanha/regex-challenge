export default [
        {
            "question": {
                "title": "Level 1",
                "subtitle": "Patterns and flags", 
                "description": "Write a regex that matches both 'We' and 'we' in the text below if you want to add flags put them after a closing /, like this: '/my-regex-here/gi'",
                "text": "We will, we will, rock you!",
                "type": "text"
            },
            "answer": {
                "correct": "We, we",
                "comment": "solution should use the case insensitive flag 'i': /we/i"
            },
            "levelCode": "test1"
        },
        {
            "question": {
                "title": "Level 2",
                "subtitle": "Patterns and flags", 
                "description": "Match both 'We' and 'we' in the text below",
                "text": "We will, we will, rock you!",
                "type": "text"
            },
            "answer": {
                "correct": "Weee",
                "comment": "solution should use the case insensitive flag 'i': /we/i"
            },
            "levelCode": "test2"
        }
    ]