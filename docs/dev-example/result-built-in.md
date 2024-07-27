# 内置返回值类型 ^v1.1.2

如果项目中不建立实体，都是动态查询的话，可以考虑使用内置的返回值类型。数据结构如下：

## NgVertex

```json
{
    "properties":{ // Map, key 是 tag 名称，keys 的长度与本级的 tags 的长度一致
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
    "properties":{ // edge 属性，Map
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

主要用于`insertEdgeBatch`接口批量写入边数据，暂不支持用做返回值类型。

```json
{
    "srcId": "IB1666614724207",
    "dstId": "1661449493728",
    "startNode": {}, // 起始节点实体类对象
    "edge": {},  // 边实体对象
    "endNode": {}, // 终止节点实体类对象
}
```
