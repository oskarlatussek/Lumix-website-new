

export default async function handler (req, res) {
    const address = req.body.address
    const email = req.body.email
    const phone = req.body.phone
    const name = req.body.name
    const products = req.body.products
    const consumption = req.body.consumption
    const message = req.body.message

    let addNewContact = 'mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:3016426706, item_name:$myItemName, column_values:$columnVals) { id } }';

    let newContact = {
        "myItemName" : name,
        "columnVals" : JSON.stringify({
          "standort" : {lat: address.geometry.location.lat, lng: address.geometry.location.lng, address: address.formatted_address},
          "email": {email: email, text: email},
          "phone": {phone: phone, countryShortName: "DE"},
          "zahlen": consumption,
          "drop_down": Object.keys(products).join(", "),
          "langer_text": message
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
    res.json({message: mrf})
}