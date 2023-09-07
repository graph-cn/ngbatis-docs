
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