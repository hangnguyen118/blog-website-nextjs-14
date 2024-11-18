'use client'
import { Button, Text, TextInput, Title } from '@mantine/core';
import classes from './ContactSection.module.css';
import { useForm } from '@mantine/form';
import { useState } from 'react';
export function ContactSection() {
    const form = useForm({
        initialValues: {
            email: '',
        },
        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
        },
    });
    const [hasSubscribeEmail, setHasSubscribeEmail] = useState("");
    const onSubmit = () => {
        setHasSubscribeEmail("1");
        console.log(form.values.email);
    }
    return (
        <div className={classes.wrapper}>
            {
                hasSubscribeEmail ?
                    <h4>Thank you for subscribe email!</h4> : (
                        <>
                            <div>
                                <Title>Contact Us</Title>
                                <Text>
                                    Contact us
                                    Leave your email and we will get back to you within 24 hours
                                </Text>
                            </div>
                            <div className={classes.form}>
                                <form onSubmit={form.onSubmit(onSubmit)}>
                                    <div className={classes.controls}>
                                        <TextInput
                                            required
                                            value={form.values.email}
                                            placeholder="Enter your email address"
                                            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                            error={form.errors.email && 'Invalid email'}
                                            classNames={{ input: classes.input }}
                                        />
                                        <Button type="submit" className={classes.control}>Subscribe</Button>
                                    </div>
                                </form>
                            </div>
                        </>
                    )
            }


        </div>
    )
}