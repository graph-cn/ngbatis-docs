
# Built-in Return Value Types ^v1.1.2

You can consider using the built-in return value type if there is no entity in the project and all are dynamic queries. The data structure is as follows:

## NgVertex

```json
{
    "properties":{ // Map, key is tag name, the length of keys is the same as the length of tags at this level
        "person":{ // Map
            "age":18,
            "gender":"M"
        }
    },
    "tags":[
        "person"
    ],
    "vid":"IB1666614724207"
}
```

## NgEdge

```json
{
    "dstID":"1670225547548",
    "edgeName":"like",
    "properties":{ // properties of edge, Map
        "likeness":0.9
    },
    "rank":1670225547619,
    "srcID":"IB1666614724207"
}
```

## NgSubgraph

```json
{
    "edges":[
        {
            "dstID":"1661449493728",
            "edgeName":"like",
            "properties":{

            },
            "rank":1661449493832,
            "srcID":"IB1666614724207"
        }
      ],
    "vertexes":[
        {
            "properties":{
                "person":{

                }
            },
            "tags":[
                "person"
            ],
            "vid":"IB1666614724207"
        }
    ]
}
```

## NgPath

```json
{
    "relationships": [{
        "srcID": "IB1666614724207",
        "dstID": "1661449493728",
        "dst": {
            "properties": {
                "person": {}
            },
            "tags": ["person"],
            "vid": "1661449493728"
        },
        "edgeName": "like",
        "rank": 0,
    }],
}
```


## NgTriplet 

Used mainly for the `insertEdgeBatch` interface to batch write edge data, and is not currently supported as a return value type.


```json
{
    "srcId": "IB1666614724207",
    "dstId": "1661449493728",
    "startNode": {},
    "edge": {},
    "endNode": {},
}
```
