import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    Prefix: ReactNode,
    Postfix: ReactNode,
    containerStyle: string | undefined
}

export default function Input(props: IInputProps) {
    const { Prefix, Postfix, className, containerStyle, ...inputProps } = props;

    return (
        <article className={`background transition-all rounded-md w-2/3 border-indigo-950 border-2 
        focus-within:border-tertiary flex items-center p-1 ${containerStyle}`}>

            {Prefix && <section className='mr-2'>
                {Prefix}
            </section>}

            <input className={`body-medium background transition-all rounded-md w-full focus:body-large outline-none ${className}`}
                type="text"
                {...inputProps} />

            {Postfix && <section className='ml-2'>
                {Postfix}
            </section>}

        </article>
    )
}