<div align="center">
  <br>
  <img alt="daftpunktocat" src="https://octodex.github.com/images/daftpunktocat-guy.gif" width="300px">
  <h1>💄git-twitch💋</h1>
  <strong>Wouldn't it be cool to make chat interactions for Twitch on GitHub? This is a webhook for github and twitch to interact with each other.</strong>
</div>

## 🍴Setup for local development

### 1. Fork this repo (optional, open a [Codespace](https://github.com/features/codespaces))
The fastest way to get started is by forking this repo. PRs are welcomed if you find anything missing or unclear.  

### 2. Start a new smee channel - https://smee.io/
smee.io is a Webhook payload delivery service. It receives payloads then sends them to your locally (development) running application. Smee is not meant to be used in production.

![smee channel](https://user-images.githubusercontent.com/5713670/107150005-ab183c80-6929-11eb-8f8e-afbdff02f301.png)

### 3. [Create a webhook](https://docs.github.com/en/github/supporting-the-open-source-community-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account#managing-webhooks-for-events-in-your-sponsored-account)

In your newly forked repo, create a webhook from the repo settings that points it to the new smee channel.

![creating a webhook](https://user-images.githubusercontent.com/5713670/107150060-f03c6e80-6929-11eb-9d68-2c659f81f7a4.png)

_note: your webhook will need to send json. You will also need to set a secret._

Choose to send selected events and deselect **Push** events and select **Stars**. Push events are a bit noisy for testing, Starring the repo is the preferred way to to test that this project is working.    

![webhook event selection](https://user-images.githubusercontent.com/5713670/107150348-5f669280-692b-11eb-9fdf-df21789ef9d1.png)


### 4. Run `npm install smee-client -g` in the terminal
The smee client is needed to run this webhook receiver (above). You will need to clone your repo locally (or open a codespace environment) to run the smee client.

```sh
npm install smee-client -g
smee -u https://[your create smee channel url from step 2]
```

### 5. Start the server
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

## 🚀 Deploy this
_to be continued_
