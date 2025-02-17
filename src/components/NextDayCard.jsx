import { IoRainyOutline } from 'react-icons/io5';
import { MdError } from 'react-icons/md';

const NextDayCard = ({ range, date, percentage, type }) => {

    const bgColor = (type) => {
        switch (type) {
            case 'Mostly Clear':
                return 'bg-green-200';
            case 'Thunderstorms':
                return 'bg-red-200';
            case 'Rain':
                return 'bg-red-200';
            case 'Partly Cloudy':
                return 'bg-orange-200';
        }
    }

    const textColor = (type) => {
        switch (type) {
            case 'Mostly Clear':
                return 'text-green-900';
            case 'Thunderstorms':
                return 'text-red-700';
            case 'Rain':
                return 'text-red-700';
            case 'Partly Cloudy':
                return 'text-orange-900';
        }
    }

    return (
        <div className="border rounded-lg overflow-hidden">
            <div className="flex flex-col gap-2 p-3">
                <div className="flex justify-between">
                    <span className="font-medium">{range}</span>
                    <span className="text-sm">{date}</span>
                </div>
                <div className="flex gap-3 text-sm font-normal">
                    <IoRainyOutline size={20} />
                    <span>Chance of Rain</span>
                    <span className="font-semibold">{percentage}</span>
                </div>
            </div>
            <div className={`flex gap-2 items-center ${bgColor(type)} px-3 py-1`}>
                <MdError className={`${textColor(type)}`} />
                <span className={`text-sm ${textColor(type)}`}>{type}</span>
            </div>
        </div>
    )
}

export default NextDayCard