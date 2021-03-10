<div align="center">
  <br>
  <img alt="8bit-heart-mona" src="https://user-images.githubusercontent.com/5679180/79618120-0daffb80-80be-11ea-819e-d2b0fa904d07.gif" width="300px">
  <h1>git-twitch</h1>
  <em>(gif created by <a href="https://github.com/pifafu">@pifafu)</a></em>
</div>

This is a service for github and twitch to interact with each other. The use case for this git-twitch interaction between Twitch and GitHub through webhooks. If you are new to Twitch Chat interactions, you can check out my original chatbot, the [beybot](https://github.com/open-sauced/beybot). In the README you will find further explanation on how Twitch interactions work.   

# 🍴Setup for local development

## 1. Fork this repo (optional, open a [Codespace](https://github.com/features/codespaces))
The fastest way to get started is by forking this repo. PRs are welcomed if you find anything missing or unclear.  

## 2. Start a new smee channel - https://smee.io/
smee.io is a Webhook payload delivery service. It receives payloads then sends them to your locally (development) running application. Smee is not meant to be used in production.

![smee channel](https://user-images.githubusercontent.com/5713670/107150005-ab183c80-6929-11eb-8f8e-afbdff02f301.png)

## 3. [Create a webhook](https://docs.github.com/en/github/supporting-the-open-source-community-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account#managing-webhooks-for-events-in-your-sponsored-account)

In your newly forked repo, create a webhook from the repo settings that points it to the new smee channel.

![creating a webhook](https://user-images.githubusercontent.com/5713670/107150060-f03c6e80-6929-11eb-9d68-2c659f81f7a4.png)

_note: your webhook will need to send json. You will also need to set a secret._

Choose to send selected events and deselect **Push** events and select **Stars**. Push events are a bit noisy for testing, Starring the repo is the preferred way to to test that this project is working.    

![webhook event selection](https://user-images.githubusercontent.com/5713670/107150348-5f669280-692b-11eb-9fdf-df21789ef9d1.png)


## 4. Run `npm install smee-client -g` in the terminal
The smee client is needed to run this webhook receiver (above). You will need to clone your repo locally (or open a codespace environment) to run the smee client.

```sh
npm install smee-client -g
smee -u https://[your create smee channel url from step 2]
```

## 5. Start the server
Prior to starting the server you will need to create a new `.env` file. You can copy the [.env.example](https://github.com/bdougie/git-twitch/blob/main/.env.example) file. Please make sure to use the secret you set in step 3, this is required for the server to run.


In a different new terminal tab (different from the smee receiver), start the web server with the below commands.

```sh
npm install
npm start
```

If you wish to run the server in development mode you can also run the following command.

```sh
npm run start:watch
```

## 6.  Add browser source plugin

### OBS Studio

[OBS Studio](https://obsproject.com/) is a free and open-source software for live-streaming and screen recording. This walk-through will show OBS Studio and consult your platform's documentation or community on how to add browser source plugins.

**Browser Source plugins**
When you set up an out of the box alert or chat system, like [Streamlabs](https://streamlabs.com/), they require you to add something called a Browser Source plugin. To do this, you add the URL pointing to the plugin, provided in the Streamlabs dashboard. This is the backbone of most streaming interactions on Twitch. Browser source plugins are HTML, CSS, and some JavaScript—so basically webpages. 

In OBS add a new source to the Scene of your choosing. OBS Studio has a few different source options, but choose Browser and proceed with adding browser source, using your deployed localhost URL (**http://localhost:3000)**. _Keep in this is setup for development purposes. You will want to deploy this to a production ready server to use_.   

![browser soource setup in obs](https://paper-attachments.dropbox.com/s_202334A481577855209C92DA29E80CC6349876B8BAA86FB00EF2859B2EC0BDD6_1593994390643_Screenshot+2020-07-05+17.12.55.png)

*One thing to keep in mind, OBS will be using a cached version of the site at the moment you add the browser plugin. If you make updates, you will need to clear the "Refresh cache of current page" button (I spent a lot of time not knowing that existed).* 

![cache refresh](https://paper-attachments.dropbox.com/s_202334A481577855209C92DA29E80CC6349876B8BAA86FB00EF2859B2EC0BDD6_1594017692929_Screenshot+2020-07-05+23.41.25.png)

# 🚀 Deploy this
_to be continued_
