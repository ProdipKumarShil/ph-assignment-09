import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LineChart, Line } from 'recharts';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';



const FakeJobDetails = () => {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const subData = [
    {
      subject: 'Assignment-1',
      marks: 57,
      fullMark: 60,
    },
    {
      subject: 'Assignment-2',
      marks: 56,
      fullMark: 60,
    },
    {
      subject: 'Assignment-3',
      marks: 49,
      fullMark: 60,
    },
    {
      subject: 'Assignment-4',
      marks: 60,
      fullMark: 60,
    },
    {
      subject: 'Assignment-5',
      marks: 60,
      fullMark: 60,
    },
    {
      subject: 'Assignment-6',
      marks: 60,
      fullMark: 60,
    },
    {
      subject: 'Assignment-7',
      marks: 60,
      fullMark: 60,
    },
    {
      subject: 'Assignment-8',
      marks: 60,
      fullMark: 60,
    },
  ];

  return (
    <div className='max-w-7xl mx-auto'>
      {/* hello */}
      {/* Charts section */}
      <div className="">
        <h1 className='text-center text-3xl my-4 font-semibold'>Stacked Area Chart</h1>
        <ResponsiveContainer width="100%" aspect={3}>
          <AreaChart width={500} height={200} data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type={'monotoneX'} dataKey='uv' stroke="#82ca9d" fill="#82ca9d" />
            <Area type={'monotoneX'} dataKey='pv' stroke="#ffc658" fill="#ffc658" />
            <Area type={'monotoneX'} dataKey='amt' stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="grid md:grid-cols-2 items-center">
        <div className="">
          <h1 className='text-center text-3xl my-4 font-semibold'>Simple Chart</h1>
          <ResponsiveContainer width="100%" aspect={3}>
            <LineChart
              width={500}
              height={200}
              data={data}
            >
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Line stroke="#8884d8" type={'natural'} dataKey='uv'></Line>
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Charts section */}



        <div className="">
          <h1 className='text-center text-3xl my-4 font-semibold'>Radar Area Chart</h1>
          <ResponsiveContainer width='100%' height='550px' aspect={2}>
            <RadarChart outerRadius={120} width={750} height={350} data={subData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 60]} />
              {/* <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} /> */}
              {/* <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} /> */}
              <Radar dataKey="marks" stroke='#8884d8' fill='#8884d8' opacity="0.6" />

            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Blog */}

    </div>
  );
};

export default FakeJobDetails;