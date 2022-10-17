

export default async function handler (req, res) {
    const email = req.body.email
    const phone = req.body.phone
    const name = req.body.name
    const message = req.body.message

    let addNewContact = 'mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:2945892503, group_id:neue_gruppe82377, item_name:$myItemName, column_values:$columnVals) { id } }';

    let newContact = {
        "myItemName" : name,
        "columnVals" : JSON.stringify({
          "e_mail": {email: email, text: email},
          "telefon_1": {phone: phone, countryShortName: "DE"},
          "langer_text": message,
          "status": "Neuer Lead",
          "datum": new Date().toISOString().substring(0, 10),
          "status_1": "Kontaktformular"
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