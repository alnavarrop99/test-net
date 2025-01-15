import { Form, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { CalendarGroup, CalendarGroupItem } from "./calendar";
import { useCallback, useMemo } from "react";
import { Button, Pagination, PaginationNext, PaginationPrev, Link } from "~/comp";

export const loader = ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  const search = url.searchParams

  const month = search.has('month') ? +search.get('month')! : undefined
  const year = search.has('year') ? +search.get('year')! : undefined


  if(month && month >= 12){
    search.set('year', `${(year ?? new Date().getFullYear()) + 1}`)
    search.set('month', '0')
  } 

  else if(month && month < 0){
    search.set('year', `${(year ?? new Date().getFullYear()) - 1}`)
    search.set('month', '11')
  } 

  const q = Object.fromEntries(search.entries() ?? []) as Partial<Record<'month' | 'year', string>>

  return {
    q
  }
}

export default function Layouts () {
  const { q } = useLoaderData<typeof loader>()

  const date = useMemo( () => {
    const current = new Date()
    const currentMonth = q.month ? +q.month : current.getMonth()
    const currentYear = q.year ? +q.year : current.getFullYear()
    current.setFullYear(currentYear, currentMonth)

    const date = new Date()
    date.setMonth(current.getMonth()+1)
    date.setDate(0)
    return date
  }, [q])

  const { days, currentMonth, currentDate, currentYear } = useMemo( () => {
    const currentMonth = q.month ? +q.month : date.getMonth()
    const currentYear = q.year ? +q.year : date.getFullYear()

    return {
      days: date.getDate(),
      currentDate: new Date().getDate(),
      currentMonth,
      currentYear
    } 
  }, [date, q] )

  const plus = useCallback(( currentMonth: number ) => {
    return currentMonth + 1
  }, [currentYear])

  const minus = useCallback(( currentMonth: number ) => {
    return currentMonth - 1
  }, [currentYear])

  return <Form className="grid items-streetch h-[100dvh] p-32 grid-rows-[min-content,1fr]">
    <div className="text-5xl flex justify-between">
      <h1>{distributionMonth[currentMonth as keyof typeof distributionDays]}, {currentYear}</h1>
      <div className="space-x-4">
        <Link to='' color='neutral' className="text-lg">Ver detalles</Link>
        <Button type="submit" color='neutral'>Agregar evento</Button>
        <Pagination>
          <PaginationPrev name="month" value={`${minus(currentMonth)}`} color='neutral' />
          <PaginationNext name="month" value={`${plus(currentMonth)}`} color='neutral' />
        </Pagination>
      </div>
    </div>
    <main>
      <div className="p-4 grid place-items-stretch grid-cols-7 grid-rows-none gap-2">
      {Array.from({ length: Object.values(distributionDays).length }).map( (_, index) => {
        const date = new Date()
        date.setMonth(currentMonth)
        date.setDate(index)
        const day = date.getDay()
        return <div className="text-center self-end text-xl font-bold" key={index}>{distributionDays[day as keyof typeof distributionDays]}</div>
      } )}
      </div>
      <div className="p-4 h-full grid place-items-stretch grid-cols-7 gap-2">
        <CalendarGroup name={`${currentMonth}`} defaultValue={`${currentDate}`}>
          {Array.from({ length: days }).map( (_, day) => <CalendarGroupItem key={day} value={`${day+1}`}>{day+1}</CalendarGroupItem>)}
        </CalendarGroup>
      </div>
    </main>
  </Form>
}

const distributionDays = {
  0: 'Lunes',
  1: 'Martes',
  2: 'Miercoles',
  3: 'Jueves',
  4: 'Viernes',
  5: 'Sabado',
  6: 'Domingo',
} as const

const distributionMonth = {
  0: 'Enero',
  1: 'Febrero',
  2: 'Marzo',
  3: 'Abril',
  4: 'Mayo',
  5: 'Junio',
  6: 'Julio',
  7: 'Agosto',
  8: 'Septiembre',
  9: 'Octubre',
  10: 'Nombiembre',
  11: 'Diciembre',
} as const
