import { useCallback, useEffect, useState } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Container, Engine } from 'tsparticles-engine';
import H1 from 'components/atoms/H1';
import Button from 'components/atoms/Button';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const { connected } = useWallet();
    const { setVisible } = useWalletModal();
    const navigate = useNavigate();
    useEffect(() => {
        if (connected) {
            navigate("/welcome");
        }
    }, [connected])

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);


    return (
        <div className='' id="tsparticles">
            <div className='position-fixed h-100 w-100'>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#0e0e0e",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 6,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
            <div className='position-relative d-flex align-items-center justify-content-center vh-100' style={{ zIndex: 1 }}>
                <div className='landing-box-wrapper'>
                    <div className='landing-box-header'>

                    </div>
                    <div className='d-flex flex-column h-100 align-items-center justify-content-center pb-5'>

                        <H1 className='fw-bold fs-1'>ENTROPY</H1>
                        <Button className='mt-3' onClick={() => setVisible(true)}>
                            <div className='fs-6'>Connect</div>
                        </Button>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Landing;