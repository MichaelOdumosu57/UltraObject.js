preFillForm({
                // allTags : [document.querySelectorAll("body *")[129],document.querySelectorAll("body *")[135],document.querySelectorAll("body *")[140],document.querySelectorAll("body *")[147]],
                allTags:document.querySelectorAll("body *:not(script)"), // bug it just grabs the whole query
                list:{
                    'LinkedIn Profile':'https://www.linkedin.com/in/michael-odumosu-a58367b1',
                    'Website':'https://ualbanyasist.github.io/',
                    'How did you hear about this job?':'Linkedin',
                    'Phone': '$80,000',
                    'Cover Letter':'as'
                    },
                look:{ 'innerHTML':null,'innerText':null,'textContent':null}
            })