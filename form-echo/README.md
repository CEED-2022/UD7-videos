This code just returns the information entered in a form.

TO-DO: At the moment: /ping returns "Pong"


If you want to test this in [heroku](https://heroku.com/), you will need to create an account there and install heroku client on your system.

- To create an app: `heroku create`
- If you already have an app: `heroku git:remote -a your-app-name`
- To deploy your changes: `git push heroku master`
- To deploy a branch: `git push heroku <branch_to_deploy>:master`