import React, { useContext, useState } from "react";
import { getOppositeTheme, ThemeContext } from "../contexts/theme";
import { Container, Hero, HeroBody, Title } from "bloomer";
import { Link } from "gatsby";

const ResearchData = [
    {
        question: "Userspace replacement for systems/cron to supervise processes and run tasks on a schedule written in Go.",
        answer:
        "systemd is a system and service manager for Linux. systemd is a Linux initialization system and service manager that includes features like on-demand starting of daemons, mount and automount point maintenance, snapshot support, and processes tracking using Linux control groups. systemd provides a logging daemon and other tools and utilities to help with common system administration tasks. systemd services run within kernel space. The motive of this project is to write a derivative of systemd in Go to execute in userspace."
    },
    {
        question: "Userspace network stack(TCP/IP) written in Go.",
        answer:
            "The network stack is an implementation of a computer networking protocol suite or protocol family. Most operating systems provide a networking stack of some kind. The most prevalent networking stack deployed is an Internet Protocol (IP) stack. The IP stack provides an application library to open/close connections to remote devices and send and receive data between the remote device. The idea is to bypass the kernel and use network hardware directly from userspace process."
    },
    {
        question: "Internet censorship and privacy status in 2020: Impact of recent technologies released for refactoring performance and privacy.",
        answer: "Internet censorship puts restrictions on what information can be publicized or viewed on the Internet. Governments and other organizations commonly use internet censorship to block access to copyrighted information as well as to harmful or sensitive content. Internet service providers (ISP) are the major players in this area who decide if an Internet user should view information or not.\n" +
            "This research project aims at a detailed study of the Internet censorship mechanism. We wish to developed various techniques and heuristics to correctly assess censorship and study the underlying mechanism used by the ISP. Few of the major mechanisms used until now were DNS-based blocking/filtering, TCP/IP Packet Filtering, HTTP Filtering. This way of censorship was easy to an extent since DNS, for example, was unencrypted and communicated through plain text. This research would further dive into aspects of how the recent technologies like DNS-over-HTTPS, DNS-over-TLS, HTTP/2.0, DANE, DNSSEC, IPSec etc effects the censorship and privacy ecosystem. Further dive deep into understanding new censorship methods adopted by ISPs like SNi-based filtering and formulize and comprehensive study."
    },
    {
        question: " ODNS: Empirical study on Privacy and cost with ODNS over HTTPS.",
        answer:
        "DNS, also known as Domain Name System, is the internet-wide service that translates fully qualified hostnames into an IP address. DNS-over-HTTPS is where, when the client sends a DNS query via an encrypted HTTP request. This provides improved confidentiality and authentication for DNS interactions in various circumstances.\n" +
            "\n" +
            "While DoH can prevent eavesdroppers from directly reading the contents of DNS exchanges, it does not allow clients to send DNS queries and receive answers from servers without revealing their local IP address, and thus information about the identity or location of the client.\n" +
            "\n" +
            "Oblivious DNS (ODNS), which is a new design of the DNS ecosystem that allows current DNS servers to remain unchanged and increases privacy for data in motion and at rest. In the ODNS system, both the client is modified with a local resolver, and there is a new authoritative name server for .odns. To prevent an eavesdropper from learning information, the DNS query must be encrypted; the client generates a request for www.foo.com, generates a session key k, encrypts the requested domain, and appends the TLD domain .odns, resulting in {www.foo.com}k.odns. The client forwards this, with the session key encrypted under the .odns authoritative server’s public key ({k}PK) in the “Additional Information” record of the DNS query to the recursive resolver, which then forwards it to the authoritative name server for .odns. The authoritative server decrypts the session key with his private key, and then subsequently decrypts the requested domain with the session key. The authoritative server then forwards the DNS request to the appropriate name server, acting as a recursive resolver. While the name servers see incoming DNS requests, they do not know which clients they are coming from; additionally, an eavesdropper cannot connect a client with her corresponding DNS queries.\n" +
            "\n" +
            "Therefore, the project will be to implement an ODNS-over-HTTPS resolver and a resolving server to investigate its performance, cost, security and privacy. \n" +
            "\n"
    },
];

const Research = () => {
    const { theme } = useContext(ThemeContext);
    const [show, setShow] = useState(false);
    const [showId, setShowId] = useState(-1);
    const setIds = (show, index) => {
        setShow(!show);
        if (showId === index) setShowId(-1);
        else setShowId(index);
    };
    console.log(show);
    return (
        <Hero id="research" isColor={theme}>
            <Title className="has-text-centered" style={{ fontWeight: "900" }}>
                Research Projects
            </Title>
            <HeroBody>
                <Container>
                    <div className="row m-0 has-text-left">
                        {ResearchData.map((faq, index) => (
                            <div
                                className={`faq col-md-12 col-sm-12`}
                                style={{ cursor: "pointer" }}
                            >
                                <div
                                    className={`p-3 my-2 mx-1 card  has-background-${theme} has-text-${getOppositeTheme(
                                        theme
                                    )}`}
                                    key={index}
                                    onClick={e => setIds(show, index)}
                                >
                                    <b>{faq.question}</b>
                                    {showId === index ? (
                                        <div>
                                            <p className="py-3 has-text-justified">{faq.answer}</p>
                                            <a className="py-3"><b>Contact: </b><a href="http://anikethgireesh.me">Aniketh Girish</a><br />For more details contact<a href="mailto:anikethgireesh@gmail.com"> anikethgireesh@gmail.com</a></a>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </HeroBody>
        </Hero>
    );
};

export default Research;
