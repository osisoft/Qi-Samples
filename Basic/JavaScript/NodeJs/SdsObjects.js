
module.exports = {
    // enumerates existing Sds types
    sdsTypeCode: {
        Empty: 0,
        "Object": 1,
        DBNull: 2,
        "Boolean": 3,
        Char: 4,
        SByte: 5,
        Byte: 6,
        Int16: 7,
        UInt16: 8,
        Int32: 9,
        UInt32: 10,
        Int64: 11,
        UInt64: 12,
        Single: 13,
        Double: 14,
        Decimal: 15,
        DateTime: 16,
        "String": 18,
        Guid: 19,
        DateTimeOffset: 20,
        TimeSpan: 21,
        Version: 22,

        NullableBoolean: 103,
        NullableChar: 104,
        NullableSByte: 105,
        NullableByte: 106,
        NullableInt16: 107,
        NullableUInt16: 108,
        NullableInt32: 109,
        NullableUInt32: 110,
        NullableInt64: 111,
        NullableUInt64: 112,
        NullableSingle: 113,
        NullableDouble: 114,
        NullableDecimal: 115,
        NullableDateTime: 116,
        NullableGuid: 119,
        NullableDateTimeOffset: 120,
        NullableTimeSpan: 121,

        BooleanArray: 203,
        CharArray: 204,
        SByteArray: 205,
        ByteArray: 206,
        Int16Array: 207,
        UInt16Array: 208,
        Int32Array: 209,
        UInt32Array: 210,
        Int64Array: 211,
        UInt64Array: 212,
        SingleArray: 213,
        DoubleArray: 214,
        DecimalArray: 215,
        DateTimeArray: 216,
        StringArray: 218,
        GuidArray: 219,
        DateTimeOffsetArray: 220,
        TimeSpanArray: 221,
        VersionArray: 222,

        Array: 400,
        IList: 401,
        IDictionary: 402,
        IEnumerable: 403,

        SdsType: 501,
        SdsTypeProperty: 502,
        SdsView: 503,
        SdsViewProperty: 504,
        SdsViewMap: 505,
        SdsViewMapProperty: 506,
        SdsStream: 507,
        SdsStreamIndex: 508,
        SdsTable: 509,
        SdsColumn: 510,
        SdsValues: 511,
        SdsObject: 512,

        SByteEnum: 605,
        ByteEnum: 606,
        Int16Enum: 607,
        UInt16Enum: 608,
        Int32Enum: 609,
        UInt32Enum: 610,
        Int64Enum: 611,
        UInt64Enum: 612,

        NullableSByteEnum: 705,
        NullableByteEnum: 706,
        NullableInt16Enum: 707,
        NullableUInt16Enum: 708,
        NullableInt32Enum: 709,
        NullableUInt32Enum: 710,
        NullableInt64Enum: 711,
        NullableUInt64Enum: 712
    },

    // enumerates boundary types
    sdsBoundaryType: {
        Exact: 0,
        Inside: 1,
        Outside: 2,
        ExactOrCalculated: 3
    },

    // enumerates Sds stream modes
    sdsStreamMode: {
        Continuous: 0,
        StepwiseContinuousLeading: 1,
        StepwiseContinuousTrailing: 2,
        Discrete: 3,
        Default: 0
    },

    //Sds Type
    SdsType: function (sdsType) {
        if (sdsType.Id) {
            this.Id = sdsType.Id
        }
        if (sdsType.Name) {
            this.Name = sdsType.Name;
        }
        if (sdsType.Description) {
            this.Description = sdsType.Description;
        }
        if (sdsType.SdsTypeCode) {
            this.SdsTypeCode = sdsType.SdsTypeCode;
        }
        if (sdsType.Properties) {
            this.Properties = sdsType.Properties;
        }
    },


    //Sds Type Property
    SdsTypeProperty: function (sdsTypeProperty) {
        if (sdsTypeProperty.Id) {
            this.Id = sdsTypeProperty.Id;
        }
        if (sdsTypeProperty.Name) {
            this.Name = sdsTypeProperty.Name;
        }
        if (sdsTypeProperty.Description) {
            this.Description = sdsTypeProperty.Description;
        }
        if (sdsTypeProperty.SdsType) {
            this.SdsType = sdsTypeProperty.SdsType;
        }
        if (sdsTypeProperty.IsKey) {
            this.IsKey = sdsTypeProperty.IsKey;
        }
    },


    //Sds Stream Object
    SdsStream: function (sdsStream) {
        this.Id = sdsStream.Id;
        this.Name = sdsStream.Name;
        this.Description = sdsStream.Description;
        this.TypeId = sdsStream.TypeId;
        if (sdsStream.SdsPropertyOverride) {
            this.SdsPropertyOverride = sdsStream.SdsPropertyOverride;
        }
    },

    //Sds Property Override
    SdsPropertyOverride: function (propertyOverride) {
        this.SdsTypePropertyId = propertyOverride.SdsTypePropertyId;
        if(propertyOverride.Uom){
            this.Uom = propertyOverride.Uom;
        }
        if(propertyOverride.InterpolationMode){
            this.InterpolationMode = propertyOverride.InterpolationMode;
        }
    },

    //Sds View object
    SdsView: function(sdsView) {
        this.Id = sdsView.Id;
        this.Name = sdsView.Name;
        this.SourceTypeId = sdsView.SourceTypeId;
        this.TargetTypeId = sdsView.TargetTypeId;
        if (sdsView.Properties) {
            this.Properties = sdsView.Properties;
        }
    },

    // Sds View Property
    SdsViewProperty: function (sdsViewProperty) {
        if (sdsViewProperty.SourceId) {
            this.SourceId = sdsViewProperty.SourceId;
        }
        if (sdsViewProperty.TargetId) {
            this.TargetId = sdsViewProperty.TargetId;
        }
    }
}