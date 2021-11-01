import DehazeIcon from '@mui/icons-material/Dehaze';
import '../Assets/Styles/Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className='nav-content-wrapper'>
                <h3 >RASH</h3>
                {/* <svg className='logo' width="180" height="28" viewBox="0 0 180 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-outside-1_2:19" maskUnits="userSpaceOnUse" x="0.97998" y="0.079998" width="179" height="28" fill="black">
            <rect fill="white" x="0.97998" y="0.079998" width="179" height="28"/>
            <path d="M1.97998 27V1.116H23.58C24.78 1.116 25.8 1.548 26.64 2.412C27.48 3.252 27.9 4.26 27.9 5.436V13.032C27.9 14.208 27.48 15.228 26.64 16.092C25.8 16.932 24.78 17.352 23.58 17.352H19.62L27.756 26.964V27H23.904L15.804 17.352L4.89598 17.316V27H1.97998ZM6.29998 14.4H23.58C23.964 14.4 24.288 14.268 24.552 14.004C24.816 13.74 24.948 13.416 24.948 13.032V5.436C24.948 5.052 24.816 4.728 24.552 4.464C24.288 4.176 23.964 4.032 23.58 4.032H6.29998C5.91598 4.032 5.57998 4.176 5.29198 4.464C5.02798 4.728 4.89598 5.052 4.89598 5.436V13.032C4.89598 13.416 5.02798 13.74 5.29198 14.004C5.57998 14.268 5.91598 14.4 6.29998 14.4Z"/>
            <path d="M31.795 27V5.4C31.795 4.2 32.215 3.18 33.055 2.34C33.895 1.5 34.915 1.08 36.115 1.08H53.395C54.595 1.08 55.615 1.5 56.455 2.34C57.295 3.18 57.715 4.2 57.715 5.4V27H54.799V17.532H34.711V27H31.795ZM34.711 14.616H54.799V5.4C54.799 5.016 54.655 4.692 54.367 4.428C54.103 4.14 53.779 3.996 53.395 3.996H36.115C35.731 3.996 35.395 4.14 35.107 4.428C34.843 4.692 34.711 5.016 34.711 5.4V14.616Z"/>
            <path d="M65.9568 27C64.7568 27 63.7368 26.58 62.8968 25.74C62.0568 24.9 61.6368 23.88 61.6368 22.68V21.672H64.5528V22.68C64.5528 23.064 64.6848 23.4 64.9488 23.688C65.2368 23.952 65.5728 24.084 65.9568 24.084H83.2368C83.6208 24.084 83.9448 23.952 84.2088 23.688C84.4968 23.4 84.6408 23.064 84.6408 22.68V16.884C84.6408 16.5 84.4968 16.176 84.2088 15.912C83.9448 15.648 83.6208 15.516 83.2368 15.516H65.9568C64.7568 15.516 63.7368 15.096 62.8968 14.256C62.0568 13.392 61.6368 12.372 61.6368 11.196V5.4C61.6368 4.2 62.0568 3.18 62.8968 2.34C63.7368 1.5 64.7568 1.08 65.9568 1.08H83.2368C84.4368 1.08 85.4568 1.5 86.2968 2.34C87.1368 3.18 87.5568 4.2 87.5568 5.4V6.408H84.6408V5.4C84.6408 5.016 84.4968 4.692 84.2088 4.428C83.9448 4.14 83.6208 3.996 83.2368 3.996H65.9568C65.5728 3.996 65.2368 4.14 64.9488 4.428C64.6848 4.692 64.5528 5.016 64.5528 5.4V11.196C64.5528 11.58 64.6848 11.904 64.9488 12.168C65.2368 12.432 65.5728 12.564 65.9568 12.564H83.2368C84.4368 12.564 85.4568 12.996 86.2968 13.86C87.1368 14.7 87.5568 15.708 87.5568 16.884V22.68C87.5568 23.88 87.1368 24.9 86.2968 25.74C85.4568 26.58 84.4368 27 83.2368 27H65.9568Z"/>
            <path d="M91.4543 27V1.08H94.3703V12.564H115.07V1.08H118.022V27H115.07V15.516H94.3703V27H91.4543Z"/>
            <path d="M122.111 27V5.4C122.111 4.2 122.531 3.18 123.371 2.34C124.211 1.5 125.231 1.08 126.431 1.08H143.711C144.911 1.08 145.931 1.5 146.771 2.34C147.611 3.18 148.031 4.2 148.031 5.4V27H145.115V17.532H125.027V27H122.111ZM125.027 14.616H145.115V5.4C145.115 5.016 144.971 4.692 144.683 4.428C144.419 4.14 144.095 3.996 143.711 3.996H126.431C126.047 3.996 125.711 4.14 125.423 4.428C125.159 4.692 125.027 5.016 125.027 5.4V14.616Z"/>
            <path d="M152.205 27V1.08H173.805C175.005 1.08 176.025 1.5 176.865 2.34C177.705 3.18 178.125 4.2 178.125 5.4V22.68C178.125 23.88 177.705 24.9 176.865 25.74C176.025 26.58 175.005 27 173.805 27H152.205ZM156.525 24.084H173.805C174.189 24.084 174.513 23.952 174.777 23.688C175.065 23.4 175.209 23.064 175.209 22.68V5.4C175.209 5.016 175.065 4.692 174.777 4.428C174.513 4.14 174.189 3.996 173.805 3.996H156.525C156.141 3.996 155.805 4.14 155.517 4.428C155.253 4.692 155.121 5.016 155.121 5.4V22.68C155.121 23.064 155.253 23.4 155.517 23.688C155.805 23.952 156.141 24.084 156.525 24.084Z"/>
            </mask>
            <path d="M1.97998 27V1.116H23.58C24.78 1.116 25.8 1.548 26.64 2.412C27.48 3.252 27.9 4.26 27.9 5.436V13.032C27.9 14.208 27.48 15.228 26.64 16.092C25.8 16.932 24.78 17.352 23.58 17.352H19.62L27.756 26.964V27H23.904L15.804 17.352L4.89598 17.316V27H1.97998ZM6.29998 14.4H23.58C23.964 14.4 24.288 14.268 24.552 14.004C24.816 13.74 24.948 13.416 24.948 13.032V5.436C24.948 5.052 24.816 4.728 24.552 4.464C24.288 4.176 23.964 4.032 23.58 4.032H6.29998C5.91598 4.032 5.57998 4.176 5.29198 4.464C5.02798 4.728 4.89598 5.052 4.89598 5.436V13.032C4.89598 13.416 5.02798 13.74 5.29198 14.004C5.57998 14.268 5.91598 14.4 6.29998 14.4Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1_2:19)"/>
            <path d="M31.795 27V5.4C31.795 4.2 32.215 3.18 33.055 2.34C33.895 1.5 34.915 1.08 36.115 1.08H53.395C54.595 1.08 55.615 1.5 56.455 2.34C57.295 3.18 57.715 4.2 57.715 5.4V27H54.799V17.532H34.711V27H31.795ZM34.711 14.616H54.799V5.4C54.799 5.016 54.655 4.692 54.367 4.428C54.103 4.14 53.779 3.996 53.395 3.996H36.115C35.731 3.996 35.395 4.14 35.107 4.428C34.843 4.692 34.711 5.016 34.711 5.4V14.616Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1_2:19)"/>
            <path d="M65.9568 27C64.7568 27 63.7368 26.58 62.8968 25.74C62.0568 24.9 61.6368 23.88 61.6368 22.68V21.672H64.5528V22.68C64.5528 23.064 64.6848 23.4 64.9488 23.688C65.2368 23.952 65.5728 24.084 65.9568 24.084H83.2368C83.6208 24.084 83.9448 23.952 84.2088 23.688C84.4968 23.4 84.6408 23.064 84.6408 22.68V16.884C84.6408 16.5 84.4968 16.176 84.2088 15.912C83.9448 15.648 83.6208 15.516 83.2368 15.516H65.9568C64.7568 15.516 63.7368 15.096 62.8968 14.256C62.0568 13.392 61.6368 12.372 61.6368 11.196V5.4C61.6368 4.2 62.0568 3.18 62.8968 2.34C63.7368 1.5 64.7568 1.08 65.9568 1.08H83.2368C84.4368 1.08 85.4568 1.5 86.2968 2.34C87.1368 3.18 87.5568 4.2 87.5568 5.4V6.408H84.6408V5.4C84.6408 5.016 84.4968 4.692 84.2088 4.428C83.9448 4.14 83.6208 3.996 83.2368 3.996H65.9568C65.5728 3.996 65.2368 4.14 64.9488 4.428C64.6848 4.692 64.5528 5.016 64.5528 5.4V11.196C64.5528 11.58 64.6848 11.904 64.9488 12.168C65.2368 12.432 65.5728 12.564 65.9568 12.564H83.2368C84.4368 12.564 85.4568 12.996 86.2968 13.86C87.1368 14.7 87.5568 15.708 87.5568 16.884V22.68C87.5568 23.88 87.1368 24.9 86.2968 25.74C85.4568 26.58 84.4368 27 83.2368 27H65.9568Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1_2:19)"/>
            <path d="M91.4543 27V1.08H94.3703V12.564H115.07V1.08H118.022V27H115.07V15.516H94.3703V27H91.4543Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1_2:19)"/>
            <path d="M122.111 27V5.4C122.111 4.2 122.531 3.18 123.371 2.34C124.211 1.5 125.231 1.08 126.431 1.08H143.711C144.911 1.08 145.931 1.5 146.771 2.34C147.611 3.18 148.031 4.2 148.031 5.4V27H145.115V17.532H125.027V27H122.111ZM125.027 14.616H145.115V5.4C145.115 5.016 144.971 4.692 144.683 4.428C144.419 4.14 144.095 3.996 143.711 3.996H126.431C126.047 3.996 125.711 4.14 125.423 4.428C125.159 4.692 125.027 5.016 125.027 5.4V14.616Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1_2:19)"/>
            <path d="M152.205 27V1.08H173.805C175.005 1.08 176.025 1.5 176.865 2.34C177.705 3.18 178.125 4.2 178.125 5.4V22.68C178.125 23.88 177.705 24.9 176.865 25.74C176.025 26.58 175.005 27 173.805 27H152.205ZM156.525 24.084H173.805C174.189 24.084 174.513 23.952 174.777 23.688C175.065 23.4 175.209 23.064 175.209 22.68V5.4C175.209 5.016 175.065 4.692 174.777 4.428C174.513 4.14 174.189 3.996 173.805 3.996H156.525C156.141 3.996 155.805 4.14 155.517 4.428C155.253 4.692 155.121 5.016 155.121 5.4V22.68C155.121 23.064 155.253 23.4 155.517 23.688C155.805 23.952 156.141 24.084 156.525 24.084Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1_2:19)"/>
          </svg> */}
                <DehazeIcon fontSize='large'/>
            </div>
        </nav>
    )
}

export default Navbar