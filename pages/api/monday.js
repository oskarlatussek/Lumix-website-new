

export default async function handler (req, res) {
    const labels = {
        "meta": "Meta Ads",
        "google": "Google Ads",
        "tuerflyer_v1": "Türflyer V1",
        "tuerflyer_v2": "Türflyer V2",
    }
    const address = req.body.address
    const email = req.body.email
    const phone = req.body.phone
    const name = req.body.name
    const products = req.body.products
    const consumption = req.body.consumption
    const message = req.body.message
    const origin = labels[req.body.origin]

    let addNewContact = 'mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:2945892503, group_id:neue_gruppe73807, item_name:$myItemName, column_values:$columnVals) { id } }';

    let newContact = {
        "myItemName" : name,
        "columnVals" : JSON.stringify({
          "standort" : {lat: address.geometry.location.lat, lng: address.geometry.location.lng, address: address.formatted_address},
          "e_mail": {email: email, text: email},
          "telefon_1": {phone: phone, countryShortName: "DE"},
          "zahlen": consumption,
          "drop_down": Object.keys(products).join(", "),
          "langer_text": message,
          "status": "Neuer Lead",
          "datum": new Date().toISOString().substring(0, 10),
          "status_1": origin
        })
      };


    const mr = await fetch("https://api.monday.com/v2", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.MONDAY_API_KEY
        },
        body: JSON.stringify({
            'query': addNewContact,
            'variables': JSON.stringify(newContact)
        })
    });

    const mrf = await mr.json()
    console.log(mrf)
    res.json({message: mrf})
}