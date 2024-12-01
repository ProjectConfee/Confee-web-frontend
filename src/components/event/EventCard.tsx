import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import React from "react";

interface Event {
    ImgUrl: string;
    title: string;
    date: string;
}


interface EventCardProps {
    events: Event;
}

const EventCard: React.FC<EventCardProps> = ({events}) =>
    (
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={events.ImgUrl}
                    width={270}
                />

            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <h4 className="font-bold text-large">{events.title}</h4>
                <p className="text-tiny text-gray-500 uppercase font-bold">{events.date}</p>
            </CardBody>
        </Card>
    )

export default EventCard;