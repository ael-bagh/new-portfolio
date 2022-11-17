/* This example requires Tailwind CSS v2.0+ */
import { FaUniversity } from 'react-icons/fa'
import {GrCertificate, GrUserWorker} from 'react-icons/gr'
import {GoMilestone} from 'react-icons/go'


const timeline = [
  {
    id: 1,
    content: 'Baccalaureate with high honours',
    target: 'Meknes, Morocco',
    href: '#',
    date: '2015',
    icon: GrCertificate,
    iconBackground: 'bg-green-400',
  },
  {
    id: 2,
    content: 'Started studying computer science at',
    target: 'ESTM',
    href: '#',
    date: '2016',
    datetime: '2016',
    icon: FaUniversity,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 3,
    content: 'Internship',
    target: 'Making a website for a Mechanical plant',
    href: 'http://egatech.ma/',
    date: '2016',
    datetime: '2016',
    icon: GrUserWorker,
    iconBackground: 'bg-blue-400',
  },
  {
    id: 4,
    content: 'Internship',
    target: 'Refactoring the Nephrology-Hemodialysis Center website',
    href: 'https://www.cnhm.ma/',
    date: '2019',
    datetime: '2019',
    icon: GrUserWorker,
    iconBackground: 'bg-blue-400',
  },
  {
    id: 4,
    content: 'Technichal University Diploma on information technology, services and networks',
    target: 'ESTM',
    href: '#',
    date: '2019',
    datetime: '2019',
    icon: GrCertificate,
    iconBackground: 'bg-green-400',
  },
  {
    id: 5,
    content: 'Started a new adventure at',
    target: '1337 school',
    href: 'https://1337.ma/',
    date: '2019',
    datetime: '2019',
    icon: FaUniversity,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 5,
    content: 'Finished 1337',
    target: 'Common core',
    href: 'https://1337.ma/',
    date: '2022',
    datetime: '2022',
    icon: GoMilestone,
    iconBackground: 'bg-green-400',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Feed() {
  return (
    <div className="flow-root px-12 py-3 overflow-x-visible  overflow-y-scroll">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-white">
                      {event.content}{' '}
                      <a href={event.href} className="font-medium text-gray-100">
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-white">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
