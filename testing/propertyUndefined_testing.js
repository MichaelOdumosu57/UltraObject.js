debugger
var a = 1
var b = 2
var c =  a === b || a === b
ultraObject = ultraObjectReset()
var objA = {
  "score": 0.9031369611169101,
  "a":{},
  "shipment": {
    "carrier_id": "se-103329",
    "service_code": "usps_first_class_mail",
    "confirmation": "adult_signature",
    "ship_to": {
      "name": "Margie McMiller",
      "company_name": "Adult Signature",
      "address_line1": "3800 North Lamar",
      "address_line2": "Suite 200",
      "city_locality": "Austin",
      "state_province": "TX",
      "postal_code": "78652",
      "address_residential_indicator": "unknown"
    },
    "packages": [
      {
        "weight": {
          "value": 4,
          "unit": "ounce"
        },
        "dimensions": {
          "length": 5,
          "width": 10,
          "height": 14,
          "unit": "inch"
        },
        "insured_value": {
          "amount": 400,
          "currency": "USD"
        }
      }
    ]
  },
  "entities": [
    {
      "type": "weight",
      "score": 0.9805313966503588,
      "text": "4oz",
      "start_index": 9,
      "end_index": 11,
      "result": {
        "value": 4,
        "unit": "ounce"
      }
    },
    {
      "type": "dimensions",
      "score": 1,
      "text": "5x10x14in",
      "start_index": 28,
      "end_index": 36,
      "result": {
        "length": 5,
        "width": 10,
        "height": 14,
        "unit": "inch"
      }
    },
    {
      "type": "dimension",
      "score": 0.9805313966503588,
      "text": "14in",
      "start_index": 33,
      "end_index": 36,
      "result": {
        "unit": "inch",
        "value": 14
      }
    },
    {
      "type": "address",
      "score": 0.9281558837267101,
      "text": "to Margie McMiller at 3800 North Lamar suite 200 in austin, tx 78652. Please send it via USPS first class and require an adult signature",
      "start_index": 61,
      "end_index": 196,
      "result": {
        "direction": "to",
        "name": "Margie McMiller",
        "company_name": "Adult Signature",
        "address_line1": "3800 North Lamar",
        "address_line2": "Suite 200",
        "city_locality": "Austin",
        "state_province": "TX",
        "postal_code": "78652"
      }
    },
    {
      "type": "person",
      "score": 0.9519646137063122,
      "text": "Margie McMiller",
      "start_index": 64,
      "end_index": 78,
      "result": {
        "value": "Margie McMiller"
      }
    },
    {
      "type": "address_line",
      "score": 0.9805313966503588,
      "text": "3800 North Lamar",
      "start_index": 83,
      "end_index": 98,
      "result": {
        "line": 1,
        "value": "3800 North Lamar"
      }
    },
    {
      "type": "number",
      "score": 0.9805313966503588,
      "text": "3800",
      "start_index": 83,
      "end_index": 86,
      "result": {
        "type": "cardinal",
        "value": 3800
      }
    },
    {
      "type": "address_line",
      "score": 1,
      "text": "suite 200",
      "start_index": 100,
      "end_index": 108,
      "result": {
        "line": 2,
        "value": "Suite 200"
      }
    },
    {
      "type": "dimension",
      "score": 0.4792571878834418,
      "text": "200 in",
      "start_index": 106,
      "end_index": 111,
      "result": {
        "unit": "inch",
        "value": 200
      }
    },
    {
      "type": "city_locality",
      "score": 0.9805313966503588,
      "text": "austin",
      "start_index": 113,
      "end_index": 118,
      "result": {
        "value": "Austin"
      }
    },
    {
      "type": "state_province",
      "score": 0.6082904353940255,
      "text": "tx",
      "start_index": 121,
      "end_index": 122,
      "result": {
        "name": "Texas",
        "value": "TX"
      }
    },
    {
      "type": "postal_code",
      "score": 0.9519646137063122,
      "text": "78652",
      "start_index": 124,
      "end_index": 128,
      "result": {
        "value": "78652"
      }
    },
    {
      "type": "carrier",
      "score": 0.9519646137063122,
      "text": "USPS",
      "start_index": 150,
      "end_index": 153,
      "result": {
        "name": "Stamps.com",
        "value": "se-103329"
      }
    },
    {
      "type": "service",
      "score": 0.6082904353940255,
      "text": "first class",
      "start_index": 155,
      "end_index": 165,
      "result": {
        "name": "USPS First Class Mail",
        "value": "usps_first_class_mail"
      }
    },
    {
      "type": "number",
      "score": 0.9805313966503588,
      "text": "first",
      "start_index": 155,
      "end_index": 159,
      "result": {
        "type": "ordinal",
        "value": 1
      }
    },
    {
      "type": "company",
      "score": 0.9519646137063122,
      "text": "adult signature",
      "start_index": 182,
      "end_index": 196,
      "result": {
        "value": "Adult Signature"
      }
    },
    {
      "type": "delivery_confirmation",
      "score": 0.8530163983409642,
      "text": "adult signature",
      "start_index": 182,
      "end_index": 196,
      "result": {
        "name": "Adult Signature",
        "value": "adult_signature"
      }
    },
    {
      "type": "insurance",
      "score": 0.8530163983409642,
      "text": "insured for $400",
      "start_index": 219,
      "end_index": 234,
      "result": {
        "value": 400,
        "unit": "USD"
      }
    },
    {
      "type": "insured_value",
      "score": 1,
      "text": "$400",
      "start_index": 231,
      "end_index": 234,
      "result": {
        "unit": "USD",
        "value": 400
      }
    }
  ]
}

ultraObject.propertyUndefined({
        target:objA,
        expected:ultraObject.iterify({iterify:["entities","2","resuslt","unit"]}),
//         stack:'true'
        noVal:{'a':'b'}
    })


ultraObject.propertyUndefined({
        target:module,
        expected:ultraObject.iterify({iterify:["exports"]}),
//         stack:'true'
        noVal:{'a':'b'}
    })

// to use meanignfully

if(   ultraObject.isPrimitive(   {type:ultraObject.objIO[   ultraObject.scope[nSobjI_0_i]   ].result}   )   ){}

else if(   !ultraObject.isPrimitive(   {type:ultraObject.objIO[   ultraObject.scope[nSobjI_0_i]   ].result}   )   ){
    
    if(   ultraObject.objIO[   ultraObject.scope[nSobjI_0_i]   ].result['a'] === 'b'   )   ){}
    
}
