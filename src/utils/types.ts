export type InferProps<FC> = FC extends React.FC<infer P> ? P : never;
