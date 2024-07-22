export async function createDonatur(url: string, postBody: object) {
    let res;
    try {
        // Sending a POST request to the reCAPTCHA API using fetch
        res = await fetch(url, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postBody)
        });
        if (!res.ok) {
            if (res.status === 422) {
                res = await res.json();
                 
            }
            throw res
          }
        // console.log("captchData", captchData);

        // Parsing the JSON response
        res = await res.json();
      } catch (e) {
        throw e;
        // Handling errors if the reCAPTCHA verification fails
        // console.log("recaptcha error:", e);
      }
  }
  