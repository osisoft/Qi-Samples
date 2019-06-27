
# SDS_TimeSeries_DotNet_Lib

- [ReadMe](./README.md)

## Things to know

This sample walkthru is written with Try .NET in mind.  See the readme.md for details on this and how to use it.

The first time you press "TestSample >" on the page it will take a few minutes for it compile and do its magic.  Subsequent presses are faster (this appears true across dotnet try sessions and browswer refreshes)

## Narative

For this sample we are someone who wants to get data from 3 different tanks; vessel, tank1 and tank2.  These 3 different tanks have 2 value readings, pressure and temperature.  To start we are only concerned with tank1, because we know once we get it setup we can easily scale to get the other data .  We are collecting this data ourselves from the sensors directly.  In this sample we explore different ways we can store the data in OCS and different ways we can retreive the data.

## Sample

### Settings

These variables are used to create the Types and Strings.  Update these as appropriate.

```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region settings --session TestSample
```

### Step 1.  Instantiate an SDS client and Obtain an authentication token

```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region step1 --session TestSample
```

### Step 2.  Create an SdsType to represent a time value pair

We decide we are going to store the OCS as a Simple type that only has a value and a time-stamp.  First we need to create the CLR type we want to represent in OCS.  

```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region step2a --session TestSample
```

Once we have that we create the type in OCS using the SdsTypeBuilder to build the SdSType and then the metadataservice to create the type.


```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region step2b --session TestSample
```

### Step 3.  Create SdsStreams to store event data in

Since we are wanting to store Tank1's data we need to create 2 streams for Tank1, one for the pressure and one for the temperature.

```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region step3 --session TestSample
```


### Step 4.  Insert data of Simple Type

With the streams created we can now insert the data into the streams.  In our example we are simulating the data collection as being returned from a static historical collection.  The data form of data of a type, in JSON form 

```json
{"pressure": 346, "temperature": 91, "time": "2017-01-11T22:21:23.430Z"}
```
In anything real, this would be a call to an outside system (whether that be to a file, or an outside service like OPC UA, or off of the GPIO directly).  It would also likely be somehting that is streaming, so we would need architect a solution to have a dedicated collecting application.  In this simulation a missing reading is recorded as a 0.

Note: we are using the type ```PressureTemperatureData``` that is editable in Step 5 below.

```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region step4a --session TestSample
```

To get to the Simple type, we need to get the values we want and assign them to our Simple Type.

```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region step4b --session TestSample
```

With them in the right format, we can then send them in.

```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region step4c --session TestSample
```

### Step 5.  Create an SdsType to represent a complex type that has 2 values and a timestamp

At this point we remember that OCS has the ability to store Complex types.  So we can store the data exactly like we get back from the sensor.  So we now need to create the appropriate type 

```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region step5a --session TestSample
```

With the class defined we take advantage of how we can create the type in OCS using the SdsTypeBuilder to build the SdSType and then the metadataservice to create the type.

```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region step5b --session TestSample
```

### Step 6.  Create SdsStream to store event data in

We can use the same approach we did in Step 3 and create the tank stream.

```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region step6 --session TestSample
```

### Step 7.  Insert data of Complex Type

If you want to see the data that is being collected, look back at Step 4.  OTherwise this a straightforward call based on what we have done previously in the sample

```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region step6 --session TestSample
```


### Step 7.  Insert data of Complex Type

If you want to see the data that is being collected, look back at Step 4.  OTherwise this a straightforward call based on what we have done previously in the sample

```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region step6 --session TestSample
```



### Step 8 and Step 9.  View window data

At this point we should look to see how the data is stored on OCS and how we can view it.  There are many different API calls and options for reading data.  For simplicity we are going to get the timestamps from the data.

```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region step8 --session TestSample
```

Note because of the JSON conversions done by this library there is no need to turn on AcceptVerbosity as the conversions handle this for us automatically.  Therefore step 9 is sufficiently covered by step 8.





### Step 10.  View summary data

In some instances it is important to get a summary of the data you are viewing.  Maybe you want an average or the count of what is in there over a timeframe.


```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region step10 --session TestSample
```

### Step 11.  Do bulk call on stream retreival

Now we want to create the streams for storing our other tanks too.  And populate them with data.  


```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region step11a --session TestSample
```

With those created we can now get our data back from tank2 and vessel in 1 call. 

```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region step11b --session TestSample
```

Note that since we did an outer join we get data for all points in the timeframe.  If a stream doesn't have data at that timepoint then we get back Null.


### Step 12.  Delete objects

As part of the sample we clean up after ourselves.


```cs --source-file ./Program.cs --project ./SDS_TS_DotNet.csproj --region step12 --session TestSample
```
