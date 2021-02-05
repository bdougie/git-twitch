<div align="center">
  <br>
  <img alt="daftpunktocat" src="https://octodex.github.com/images/daftpunktocat-guy.gif" width="300px">
  <h1>💄git-twitch💋</h1>
  <strong>Wouldn't it be cool to make chat interactions for Twitch on GitHub? This is a webhook for github and twitch interaction.</strong>
</div>

## 🍴Setup for local development

1. Fork this repo (optional, open a [Codespace](https://github.com/features/codespaces))
2. Run `npm install smee-client -g`
3. Start a new smee channel - https://smee.io/
4. [Create a webhook](https://docs.github.com/en/github/supporting-the-open-source-community-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account#managing-webhooks-for-events-in-your-sponsored-account). When creating your webhook, make sure you go to settings --> Webhooks and paste the Smee URL in the Payload URL. Edit the webhook; create a secret, and then under "Let me select individual events", choose Star and uncheck all other events.

5. In the terminal `npm install`

### Start the server
`npm start`

## 🚀 Deploy this
_to be continued_
