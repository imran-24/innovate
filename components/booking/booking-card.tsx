'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import Passenger from "./passenger";
import Class from "./class";
import { Payment } from "./payment";
import CheckItem from "./check-item";
import BookingForm from "./booking-form";

enum STEPS{
    ONE = 1,
    TWO = 2,
    THREE = 3,
}

const BookingCard = ()=> {
    const [step, setStep] = useState(STEPS.ONE)
    const [direct, setDirect] = useState(false);

    
    return(
        <Card className="w-full">
            <CardHeader>
                <div className="flex items-center space-x-2">
                    <Button 
                    onClick={()=> setStep(STEPS.ONE)}
                    type="button"
                    variant={STEPS.ONE === step ? 'active' : 'secondary'}>
                        One-way
                    </Button>
                    <Button 
                    onClick={()=> setStep(STEPS.TWO)}
                    type="button"
                    variant={STEPS.TWO === step ? 'active' : 'secondary'}>
                        Round-trip
                    </Button>
                    <Button 
                    onClick={()=> setStep(STEPS.THREE)}
                    type="button"
                    variant={STEPS.THREE === step ? 'active' : 'secondary'}>
                        Multi-trip
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <BookingForm value={step} />
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row  md:justify-between items-start md:items-center  space-x-2 space-y-2 sm:space-y-0">
                <div className="flex flex-1  flex-col flex-col-reverse gap-y-2 items-start md:items-center  md:flex-row md:justify-between ">
                    <div className="w-42">
                        <CheckItem 
                        checked={direct}
                        onChange={()=> setDirect(!direct)}
                        label="Direct flight only" />
                    </div>
                    <div className="flex flex-wrap gap-y-2 items-center gap-x-2">
                        <Passenger />
                        <Class />
                        <Payment />
                    </div>
                </div>
                <div className="w-full   sm:w-auto flex justify-end ">
                    <Button type="button" size={'sm'} variant={'green'}>Search</Button>
                </div>
            </CardFooter>
        </Card>

    )
}

export default BookingCard;