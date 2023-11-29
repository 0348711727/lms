"use client";

import { FC } from "react";
interface ICreatePageProps { };

import * as z from 'zod';
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is require"
    })
})

const CreatePage: FC<ICreatePageProps> = (props) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ""
        }
    })
    const router = useRouter();
    const { isSubmitting, isValid } = form.formState;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const res: any = await axios.post("/api/courses");
            router.push(`/teacher/courses/${res.id}`)
        } catch (error) {
            toast.error('Something went wrong');
            // console.log(error)
        }
    }
    return (
        <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
            <div>
                <h1 className="text-2xl">
                    create your course
                </h1>
                <p className="text-slate-600 text-sm">
                    abc
                </p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
                        <FormField control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Course title
                                    </FormLabel>
                                    <FormControl>
                                        <Input disabled={isSubmitting}
                                            placeholder="e.g Advanced web"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        What will you teach in this course ?
                                    </FormDescription>
                                    <FormMessage />
                                    <div className="flex gap-x-2 items-center">
                                        <Link href='/'>
                                            <Button type="button" variant="ghost">Cancel</Button>
                                        </Link>
                                        <Button disabled={!isValid || isSubmitting} type="submit">Continue</Button>
                                    </div>
                                </FormItem>
                            )}
                        />

                    </form>
                </Form>
            </div>
        </div>
    );
}

export default CreatePage;