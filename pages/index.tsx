import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'

function getDaysInMonth(year: any, month: any) {
  return new Date(year, month + 1, 0).getDate();
}

interface Props {
  outputTexts: {
    differenceInDaysText: string
    differenceInHoursText: string
    differenceInMinutesText: string
    differenceInSecondsText: string
  }
}

interface outputTexts {
  differenceInDaysText: string
  differenceInHoursText: string
  differenceInMinutesText: string
  differenceInSecondsText: string
}

const Home: NextPage<Props> = ({ outputTexts }) => {
  const [differenceInFormattedString, setDifferenceInFormattedString] = useState<outputTexts>(outputTexts);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const augustDate = new Date(2021, 7, 31); // month is 0-indexed, so 7 is August

      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const currentDay = currentDate.getDate();
      const currentHour = currentDate.getHours();
      const currentMinute = currentDate.getMinutes();
      const currentSecond = currentDate.getSeconds();

      const augustYear = augustDate.getFullYear();
      const augustMonth = augustDate.getMonth();
      const augustDay = augustDate.getDate();
      const augustHour = augustDate.getHours();
      const augustMinute = augustDate.getMinutes();
      const augustSecond = augustDate.getSeconds();

      let differenceInYears = currentYear - augustYear;
      let differenceInMonths = currentMonth - augustMonth;
      let differenceInDays = currentDay - augustDay;
      let differenceInHours = currentHour - augustHour;
      let differenceInMinutes = currentMinute - augustMinute;
      let differenceInSeconds = currentSecond - augustSecond;

      if (differenceInMonths < 0) {
        differenceInYears--;
        differenceInMonths += 12;
      }
      if (differenceInDays < 0) {
        differenceInMonths--;
        differenceInDays += getDaysInMonth(currentYear, currentMonth);
      }

      if (differenceInHours < 0) {
        differenceInDays--;
        differenceInHours += 24;
      }
      if (differenceInMinutes < 0) {
        differenceInHours--;
        differenceInMinutes += 60;
      }
      if (differenceInSeconds < 0) {
        differenceInMinutes--;
        differenceInSeconds += 60;
      }

      let totalDays = differenceInDays
      totalDays += differenceInMonths * 30
      totalDays += differenceInYears * 365

      const outputTexts = {
        differenceInDaysText: `${totalDays} DAYS`,
        differenceInHoursText: `${differenceInHours} hr`,
        differenceInMinutesText: `${differenceInMinutes} min`,
        differenceInSecondsText: `${differenceInSeconds} sec`
      }

      if(totalDays === 1 || totalDays === 0) {
        outputTexts.differenceInDaysText = `${differenceInDays} DAY`
      }

      if(differenceInHours === 0) {
        outputTexts.differenceInHoursText = ``
      }



      setDifferenceInFormattedString(outputTexts);
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div>
      <Head>
        <title>Anniversary</title>
        <meta name="description" content="Pak, Ai anniversary <3" />
        <link rel="icon" type="image/png" href="/logo16x16.png" sizes='16x16' />
        <link rel="icon" type="image/png" href="/logo32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/logo96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/logo192x192.png" sizes="192x192" />
      </Head>

      <main className='relative min-h-screen flex flex-col justify-center items-center bg-[#00203FFF]'>
        <div className=' border-[10px] p-7 md:p-16 flex flex-col justify-center items-center rounded-3xl space-y-3'>

          <div className='text-5xl md:text-8xl text-[#ADEFD1FF] font-kanit'>
            {differenceInFormattedString.differenceInDaysText}
          </div>

          <div className='text-3xl md:text-5xl text-[#ADEFD1FF] font-kanit'>
            {differenceInFormattedString.differenceInHoursText} {differenceInFormattedString.differenceInMinutesText} {differenceInFormattedString.differenceInSecondsText}  
          </div>

        </div>

        <div className="absolute right-5 bottom-3 text-xl text-white font-kanit">pakaiforever</div>
      </main>
    </div>
  )
}

export default Home

export async function getStaticProps(context: any) {
  const currentDate = new Date();
  const augustDate = new Date(2021, 7, 31); // month is 0-indexed, so 7 is August

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const currentSecond = currentDate.getSeconds();

  const augustYear = augustDate.getFullYear();
  const augustMonth = augustDate.getMonth();
  const augustDay = augustDate.getDate();
  const augustHour = augustDate.getHours();
  const augustMinute = augustDate.getMinutes();
  const augustSecond = augustDate.getSeconds();

  let differenceInYears = currentYear - augustYear;
  let differenceInMonths = currentMonth - augustMonth;
  let differenceInDays = currentDay - augustDay;
  let differenceInHours = currentHour - augustHour;
  let differenceInMinutes = currentMinute - augustMinute;
  let differenceInSeconds = currentSecond - augustSecond;

  if (differenceInMonths < 0) {
    differenceInYears--;
    differenceInMonths += 12;
  }
  if (differenceInDays < 0) {
    differenceInMonths--;
    differenceInDays += getDaysInMonth(currentYear, currentMonth);
  }

  if (differenceInHours < 0) {
    differenceInDays--;
    differenceInHours += 24;
  }
  if (differenceInMinutes < 0) {
    differenceInHours--;
    differenceInMinutes += 60;
  }
  if (differenceInSeconds < 0) {
    differenceInMinutes--;
    differenceInSeconds += 60;
  }

  let totalDays = differenceInDays
  totalDays += differenceInMonths * 30
  totalDays += differenceInYears * 365

  const outputTexts = {
    differenceInDaysText: `${totalDays} DAYS`,
    differenceInHoursText: `${differenceInHours} hr`,
    differenceInMinutesText: `${differenceInMinutes} min`,
    differenceInSecondsText: `${differenceInSeconds} sec`
  }

  if(totalDays === 1 || totalDays === 0) {
    outputTexts.differenceInDaysText = `${differenceInDays} DAY`
  }

  if(differenceInHours === 0) {
    outputTexts.differenceInHoursText = ``
  }

  
  return {
    props: {
      outputTexts
    }
  }
}