
const app=require('../src/app');


describe('splitTags',function () {
    it("should split tags into two parts if it has '-' ",function () {
        let tags=[/*
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            ,'ITEM000001',
         'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        */'ITEM000001',
            'ITEM000003-2']
        let result=app.splitTags(tags);

        expect(result).toEqual([
            {
                barcode:'ITEM000001',
                count:1
            },{
            barcode:'ITEM000003',
            count:2
        }
        ])

    })
});

describe('getCount',function () {
    it("should compute items number in total",function () {
        let splitedTags=[

            {
                barcode:'ITEM000001',
                count:1
            },{
                barcode:'ITEM000003',
                count:2
            },
            {
                barcode:'ITEM000001',
                count:1
            }

        ];
        let result=app.getCount(splitedTags);
        
        expect(result).toEqual([
            {
                barcode:'ITEM000001',
                count:2
            },{
                barcode:'ITEM000003',
                count:2
            }
        ])
    })
});

describe('getType',function () {
    it("should add type after countedItems",function () {
        let countedItems=[

            {
                barcode:'ITEM000001',
                count:2
            },{
                barcode:'ITEM000003',
                count:2
            }

        ];
        let result=app.getType(countedItems);
        
        expect(result).toEqual([

            {
                barcode:'ITEM000001',
                count:2,
                type: 'BUY_TWO_GET_ONE_FREE'
                
            },{
                barcode:'ITEM000003',
                count:2,
                type:'other'
            }

        ]);
    });
});