---
slug: what-is-cors-error
title: Understanding and Resolving CORS Error
authors: anand-tech
tags: [cors, preflight]
---
import Highlight from '@site/src/components/Highlight';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'

## <Highlight color='#800031' highlight='fg' fontWeight='bold'> What is CORS and CORS preflight? </Highlight>
**C**ross-**O**rigin **R**esource **S**haring (<Highlight color='#25c2a0'>CORS</Highlight>) is an HTTP-based security mechanism controlled and enforced by the client (web browser) that allows controlled access to resources located outside of a given domain.

Generally, for security reasons, <Highlight highlight='lightBg' color='#D1FFBD'>browsers forbid requests that come in from cross-domain sources</Highlight>. However, <Highlight highlight='lightBg' color='#D1FFBD'>there could be cases where you want to overcome this</Highlight> and access cross-domain resources, and <Highlight highlight='lightBg' color='#D1FFBD'>CORS makes this possible</Highlight>.

There is another concept known as **S**ame-**O**rigin **P**olicy (<Highlight color='#25c2a0'>SOP</Highlight>) which enables resource sharing on similar domains. The Same-Origin Policy was developed as a security mechanism for browsers to protect resources from malicious attacks. SOP allows resource sharing (data exchange) between two objects with the same origins.

<Highlight color='#25c2a0'>CORS preflight</Highlight>: When a browser sends a request to a server, it first sends an HTTP Options request. This is called a CORS preflight request. The server then responds with a list of allowed methods and headers. If the browser is allowed to make the actual request, it sends the actual request. If not, it shows an error and does not continue to send the main request.

## How to fix CORS error?
<Highlight highlight='lightBg' color='#D1FFBD'>The fundamental idea of **fixing CORS** is to respond to **OPTIONS** requests sent from a client with proper headers.</Highlight> There are many ways to start responding with the proper CORS. You can use a proxy server, or you can use middleware in your server

1. Configure your server: By default, if you are a server owner, you need to configure CORS responses in your server and this is the only way to address the issue properly. Add this header to your server `'Access-Control-Allow-Origin': '*'` as below (simple express framework):

```js title="server.js"
app.use((req, res, next) => {
  // highlight-next-line
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});
```
2. Proxy the API Request while using External Calls: You can check [here](https://actionanand.github.io/wiki/docs/intro/#proxy-file-in-frontend-angular-react-etc---sample) for more info

3. Set up a proxy server: Proxy server is a good solution if you don't have access to the service you intend to use.
List of open-source CORS services that you can find on the internet:

    - https://github.com/Freeboard/thingproxy
    - https://github.com/bulletmark/corsproxy
    - https://github.com/Rob--W/cors-anywhere

4. Use a Serverless Function: Popular serverless functions include AWS Lambda, Azure Functions, and Google Cloud functions. These services allow you to get just enough server space to run a function or two, as you do not need much space to run a function that calls a web service to return some data. See the below AWS Lambda function example

```js
exports.handler = async (event) => {
try{
// some code...
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers':
          'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'OPTIONS,POST',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': '*',
      },
      body: JSON stringified object,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers':
          'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'OPTIONS,POST',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': '*',
      },
      body: JSON.stringify({
        name: error.name,
        code: error.code,
        message: error.message,
      }),
    };
  }
};
```

5. Install a browser extension

6. Disable browser CORS checks: You can disable CORS checks in your browser completely. To disable CORS checks in Google Chrome, you need to start it with the `--disable-web-security` and `--user-data-dir` flags. By doing that, Google Chrome will not send CORS preflight requests and will not validate CORS headers.

```sh
# Windows
chrome.exe --user-data-dir="C://chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials

# macOS
open /Applications/Google\ Chrome.app --args --user-data-dir="/var/tmp/chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials

# Linux
google-chrome --user-data-dir="~/chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials
```

    - Open Run Command (win + R)
    - Paste the below command
    ```sh
      chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security --disable-site-isolation-trials
    ```
7. How to test CORS?
Using a browser to test your CORS configuration might be a tedious task. You can use a tool like [CORS Tester](https://cors-test.codehappy.dev/), [test-cors.org](https://www.test-cors.org/), or, if you are familiar with the command line, you can use [curl](https://curl.se/) to test your CORS configuration.

```sh
curl -v -X OPTIONS https://simplelocalize.io/api/v1/translations
```

### Resouce:

1. [FoxyProxy Standard for putty tunnel dynamic port usage](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/)
2. [How to setup SSH tunneling with foxy proxy and Putty?](https://www.interserver.net/tips/kb/setup-ssh-tunneling-foxy-proxy-putty/)
3. [Simple SSH Tunneling with FoxyProxy](https://www.willchatham.com/security/simple-ssh-tunneling-with-foxyproxy/)
4. [Using Firefox with a Putty SSH tunnel as a SOCKS proxy](https://www.adamfowlerit.com/2013/01/using-firefox-with-a-putty-ssh-tunnel-as-a-socks-proxy/)
5. [stack overflow](https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome/42024918#42024918)
6. [What is CORS?](https://simplelocalize.io/blog/posts/what-is-cors/)
