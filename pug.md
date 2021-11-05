pug is a templating engine that makes writing html easier by giving you access to loops if statements, conditional statement that needs to be templated: i.e. writing an email to many users easier. This is the tutorial I used to get started: https://www.youtube.com/watch?v=5uQWAxsV4_g

https://www.youtube.com/watch?v=WUHVb4pt47E -> trying to build on my pug app
-instead of closing tags, we use indentation in pug to tell it what tags are nested
-in pug, we can interoplate variables inside of the pug file by declaring a variable with a dash before it "-var name = "julian" and then sticking it into the rendered text inside a #{}
-you can use html inside of a pug file by using !{} which tells pug not to turn whatever is passed through the curly braces into text
-you can use an if else statement
-you can pass global vairables through an express route to use in the pug doc
-can use case syntax / switch statements

-using pug with express and tailwind
https://www.youtube.com/watch?v=YnvH-ouX_y4

how to template inside a template?

        //- h1 Welcome to Pug.js
        //- - var name = "julian"
        //- -var checked = true
        //- - var agent = { job: "Web Dev"}
        //- p(id="paragraph-id") This is a paragraph in pug and my name is #{name}
        //- if checked && agent.job
        //-     h3 This is a okay #{agent.job}
        //- else
        //-     h2 this is okayish
        //- - var choice = 0
        //- case choice
        //-     when 1
        //-         p nice choice
        //-         break
        //-     default span "not a choice"

        https://devhints.io/pug

        pug with bootstrap

https://dev.to/jh3y/pug-in-5-minutes-272k

https://www.youtube.com/watch?v=ZzWL3hh9JiI -> multi line content
