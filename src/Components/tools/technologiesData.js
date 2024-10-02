import {
    SiAngular,
    SiBitbucket,
    SiBootstrap,
    SiCss3,
    SiDatadog,
    SiDatagrip,
    SiDrupal,
    SiGithub,
    SiGitlab,
    SiHtml5,
    SiIntellijidea,
    SiJavascript,
    SiJquery,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPhp,
    SiPostgresql,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVisualstudiocode,
    SiVite,
    SiVitest,
    SiWebpack,
    SiWebstorm,
    SiWordpress
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

export const technologiesData = {
    frontEnd: [
        {
            name: 'React',
            icon: <SiReact color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'Angular',
            icon: <SiAngular color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'Next Js',
            icon: <SiNextdotjs color={'#fff'} size={'25px'} />
        },
        {
            name: 'TypeScript',
            icon: <SiTypescript color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'JavaScript',
            icon: <SiJavascript color={'#61dafb'} size={'25px'} />
        },
        {
            name: 'JQuery',
            icon: <SiJquery color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'Tailwind CSS',
            icon: <SiTailwindcss color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'Bootstrap',
            icon: <SiBootstrap color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'Vite',
            icon: <SiVite color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'Vitest',
            icon: <SiVitest color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'WebPack',
            icon: <SiWebpack color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'HTML5',
            icon: <SiHtml5 color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'CSS3',
            icon: <SiCss3 color={'#007ACC'} size={'25px'} />
        }
    ],
    backEnd: [
        {
            name: 'Java',
            icon: <DiJava color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'NodeJs',
            icon: <SiNodedotjs color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'PHP',
            icon: <SiPhp color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'My SQL',
            icon: <SiMysql color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'PostgreSQL',
            icon: <SiPostgresql color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'Datadog',
            icon: <SiDatadog color={'#007ACC'} size={'25px'} />
        }
    ],
    tools: [
        {
            name: 'Web Storm',
            icon: <SiWebstorm color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'IntelliJ',
            icon: <SiIntellijidea color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'VS Code',
            icon: <SiVisualstudiocode color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'Data Grip',
            icon: <SiDatagrip color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'Github',
            icon: <SiGithub color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'Gitlab',
            icon: <SiGitlab color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'Bit Bucket',
            icon: <SiBitbucket color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'Wordpress',
            icon: <SiWordpress color={'#007ACC'} size={'25px'} />
        },
        {
            name: 'Drupal',
            icon: <SiDrupal color={'#007ACC'} size={'25px'} />
        }
    ]
};
