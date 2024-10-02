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
            icon: <SiReact color={'#00d1f7'} size={'25px'} />
        },
        {
            name: 'Angular',
            icon: <SiAngular color={'#d61a15'} size={'25px'} />
        },
        {
            name: 'Next Js',
            icon: <SiNextdotjs color={'#000'} size={'25px'} />
        },
        {
            name: 'TypeScript',
            icon: <SiTypescript color={'#2f74c0'} size={'25px'} />
        },
        {
            name: 'JavaScript',
            icon: <SiJavascript color={'#e8d44d'} size={'25px'} />
        },
        {
            name: 'JQuery',
            icon: <SiJquery color={'#162a42'} size={'25px'} />
        },
        {
            name: 'Tailwind CSS',
            icon: <SiTailwindcss color={'#6e88f4'} size={'25px'} />
        },
        {
            name: 'Bootstrap',
            icon: <SiBootstrap color={'##7c18f8'} size={'25px'} />
        },
        {
            name: 'Vite',
            icon: <SiVite color={'#ffd02e'} size={'25px'} />
        },
        {
            name: 'Vitest',
            icon: <SiVitest color={'#769e22'} size={'25px'} />
        },
        {
            name: 'WebPack',
            icon: <SiWebpack color={'#387abf'} size={'25px'} />
        },
        {
            name: 'HTML5',
            icon: <SiHtml5 color={'#e4552d'} size={'25px'} />
        },
        {
            name: 'CSS3',
            icon: <SiCss3 color={'#2d53e5'} size={'25px'} />
        }
    ],
    backEnd: [
        {
            name: 'Java',
            icon: <DiJava color={'#ed272c'} size={'25px'} />
        },
        {
            name: 'NodeJs',
            icon: <SiNodedotjs color={'#7ab168'} size={'25px'} />
        },
        {
            name: 'PHP',
            icon: <SiPhp color={'#7b7fb5'} size={'25px'} />
        },
        {
            name: 'My SQL',
            icon: <SiMysql color={'#f29418'} size={'25px'} />
        },
        {
            name: 'PostgreSQL',
            icon: <SiPostgresql color={'#396c94'} size={'25px'} />
        },
        {
            name: 'Datadog',
            icon: <SiDatadog color={'#6832ab'} size={'25px'} />
        }
    ],
    tools: [
        {
            name: 'Web Storm',
            icon: <SiWebstorm color={'#000'} size={'25px'} />
        },
        {
            name: 'IntelliJ',
            icon: <SiIntellijidea color={'#000'} size={'25px'} />
        },
        {
            name: 'VS Code',
            icon: <SiVisualstudiocode color={'#2bb0f3'} size={'25px'} />
        },
        {
            name: 'Data Grip',
            icon: <SiDatagrip color={'#000'} size={'25px'} />
        },
        {
            name: 'Github',
            icon: <SiGithub color={'#882e95'} size={'25px'} />
        },
        {
            name: 'Gitlab',
            icon: <SiGitlab color={'#e34930'} size={'25px'} />
        },
        {
            name: 'Bit Bucket',
            icon: <SiBitbucket color={'#2d88ff'} size={'25px'} />
        },
        {
            name: 'Wordpress',
            icon: <SiWordpress color={'#28799e'} size={'25px'} />
        },
        {
            name: 'Drupal',
            icon: <SiDrupal color={'#0877bc'} size={'25px'} />
        }
    ]
};
