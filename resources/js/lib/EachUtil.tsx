import { LucideProps } from "lucide-react";
import { Children } from "react";

interface Props {
    of: {
        name?: string;
        href?: string;
        auth?: boolean;
        icon?: React.ForwardRefExoticComponent<
            Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
        >;
        urlImage?: string;
        place?: string;
        category?: string;
        amount?: number;
    }[];
    render: (item: any, index: number) => JSX.Element;
}

export default function EachUtil({ of, render }: Props) {
    return Children.toArray(of.map((item, index) => render(item, index)));
}
