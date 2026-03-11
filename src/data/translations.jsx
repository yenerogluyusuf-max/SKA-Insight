import React from 'react';

export const translations = {
  de: {
    nav: {
      mission: "Mission",
      services: "Leistungen",
      approach: "Ansatz",
      about: "Über uns",
      contact: "Kontakt"
    },
    hero: {
      kicker: "Beratung · Projektentwicklung · Management",
      title: <>Brücken bauen.<br/>Werte schaffen.</>,
      subtitle: "Wir konzipieren und realisieren Strukturen zur Stärkung der Geschäftstätigkeit zwischen Deutschland und der Türkei.",
      ctaPrimary: "Gespräch vereinbaren"
    },
    mission: {
      title: "Unsere Mission",
      text: "Der Aufbau nachhaltiger Strukturen, die die unternehmerischen und wirtschaftlichen Beziehungen zwischen Deutschland und der Türkei stärken, erfordert Zeit, Erfahrung und eine klare Vision. Wir bringen Unternehmen und Wirtschaftsakteure zusammen, um positive Ergebnisse für alle Beteiligten zu erzielen.",
      note: "Wir schaffen Verbindungen, die Bestand haben."
    },
    services: {
      title: "Unsere Kernkompetenzen",
      items: [
        {
          id: 'consulting',
          name: "Strategische Beratung",
          desc: "Umfassende Analysen, Markt- & Stakeholder-Mapping, Public Affairs sowie Risiko- und Chancenbewertungen.",
          detail: "Im Bereich der strategischen Beratung bieten wir maßgeschneiderte Lösungen, die auf tiefgehenden Analysen des deutsch-türkischen Marktes basieren. Wir identifizieren für Sie relevante politische und wirtschaftliche Akteure, bewerten potenzielle Risiken und decken ungenutzte Chancen auf. Unser Ziel ist es, Ihnen eine solide Entscheidungsgrundlage für nachhaltigen Erfolg in beiden Märkten zu liefern."
        },
        {
          id: 'development',
          name: "Projektentwicklung",
          desc: "Von der Konzeption über die Partnersuche und Fördermittel-Scouting (DE/TR/EU) bis hin zu skalierbaren Roadmaps.",
          detail: "Wir begleiten Sie von der ersten Idee bis zur finalen Umsetzung. Unser Team entwickelt innovative Projektkonzepte, findet die passenden Kooperationspartner in Deutschland und der Türkei und unterstützt Sie bei der Akquise von Fördermitteln auf nationaler und EU-Ebene."
        },
        {
          id: 'management',
          name: "Prozessmanagement",
          desc: "Effiziente Programm- und Projektsteuerung, KPI-Tracking, Compliance, Governance sowie Change- und Krisenmanagement.",
          detail: "Ein exzellentes Management ist der Schlüssel zum Projekterfolg. Wir übernehmen die Steuerung komplexer Programme, definieren und überwachen relevante KPIs und stellen die Einhaltung von Compliance- und Governance-Richtlinien sicher."
        }
      ]
    },
    approach: {
      title: "Unser Ansatz",
      kicker: "Wie wir arbeiten",
      points: [
        {
          head: "Interkulturelle Expertise",
          body: "Tiefgreifendes Verständnis für rechtliche Rahmenbedingungen, Business-Etikette und Kultur beider Länder."
        },
        {
          head: "Wirkungsvolle Netzwerke",
          body: "Wir verbinden zielorientiert und transparent die richtigen Partner aus Wirtschaft, Verbänden und Geschäftswelt."
        },
        {
          head: "Pragmatische Umsetzung",
          body: "Klare Meilensteine, messbare KPIs und stringentes Risikomanagement für eine schnelle Realisierung."
        }
      ]
    },
    about: {
      title: "Über Uns",
      text: "Wir bringen langjährige Erfahrung aus internationalem Handel, Industrie, Telekommunikation, Recht, Diplomatie und Public Affairs.\n\nDas Team um SKA Insight weist dadurch umfangreiche Fachkenntnisse in Business Development, Import & Export, Vertriebsstrategie, Verwaltung, Personal- und Organisationsentwicklung, Skillmanagement, Verhandlungsführung und Protokoll auf."
    },
    team: {
      title: "Das Gründerteam",
      back_to_overview: "Zurück zur Übersicht",
      professional_history: "Berufliche Stationen",
      core_competencies: "Kernkompetenzen",
      members: [
        {
          id: 'senturk',
          name: "Abdullah Şentürk",
          role: "Co-Founder · Unternehmer & Vertrieb",
          img: "/images/abdullah-senturk.jpg",
          bio_short: ["Geschäftsführer KA-EN GmbH", "Internationaler Handel", "Physik-Abschluss"],
          long_bio: "Mein beruflicher Weg verbindet fundierte akademische Ausbildung mit langjähriger internationaler Erfahrung im Aufbau wirtschaftlicher Netzwerke zwischen Europa, Asien und Afrika. Mit meinem Physikstudium in Istanbul und einem betriebswirtschaftlichen Studium auf Englisch in Zypern habe ich meine Kenntnisse durch eine Weiterbildung als SAP-Anwender ergänzt. Bereits 1999 gründete ich mein eigenes Unternehmen und übernahm 2002 die Geschäftsführung. Seither begleite ich Unternehmen erfolgreich bei internationalen Geschäften und Projekten. Mein Schwerpunkt liegt auf Außenhandel, Zollthemen sowie der strategischen Vernetzung von Unternehmen. Über die Jahre habe ich ein starkes Netzwerk in Europa, Asien und Afrika aufgebaut. Als Gründungsmitglied von BizNet e.V. setze ich mich aktiv für die Förderung nachhaltiger Geschäftsbeziehungen ein. Darüber hinaus habe ich Messeorganisationen in Europa für asiatische Unternehmer realisiert und zahlreiche europäische wie asiatische Firmen bei ihrem Markteintritt in Europa beraten und begleitet. Meine Teilnahme an internationalen Wirtschaftskongressen hat meinen Blick für globale Zusammenhänge zusätzlich geschärft. Mit dieser Mischung aus wissenschaftlichem Hintergrund, unternehmerischer Erfahrung und interkultureller Kompetenz möchte ich innovative Projekte voranbringen und Brücken zwischen internationalen Märkten bauen.",
          skills: ["Internationaler Vertrieb", "Business Development", "Verhandlungsführung", "Export & Import", "Branchenexpertise Papierindustrie", "Interkulturelles Management"],
          cv: [
            {
              period: "1999 – Heute",
              title: "Gründer & Geschäftsführer",
              company: "KA-EN GmbH",
              desc: "Leitung und strategische Ausrichtung des Unternehmens mit Fokus auf den internationalen An- und Verkauf von Maschinen für die Papier- und Wellpappen-Industrie. Aufbau und Pflege eines globalen Kunden- und Lieferantennetzwerks."
            },
            {
              period: "Studium",
              title: "Diplom-Physiker",
              company: "Yıldız Teknik Üniversitesi, Istanbul",
              desc: "Studium der Physik mit Schwerpunkt auf Materialwissenschaften und technischer Anwendung."
            }
          ]
        },
        {
          id: 'kaya',
          name: "Turhan Kaya",
          role: "Co-Founder · Diplomatie & Public Affairs",
          img: "/images/turhan-kaya.jpg",
          bio_short: ["Ehem. Generalkonsul", "Diplomatischer Dienst", "M.A. Uni Göttingen"],
          long_bio: "Langjährige diplomatische und außenpolitische Erfahrungen haben mich in diversen Kompetenzbereichen wie Verhandlungstechniken, Networking, Analyse, Verwaltung, Organisationsplanung und Projektmanagement geschult. Durch meine dienstliche Tätigkeit als Generalkonsul in Köln und als Botschaftsrat in Berlin konnte ich in den letzten zehn Jahren enge Kontakte zu deutschen und türkischen Geschäfts-, Wirtschafts-, Politik- und Medienkreisen aufbauen. Meine aktive Teilnahme an den deutsch-türkischen Beziehungen haben zu einem tiefgreifenden Verständnis beider Kulturen, Gesellschaften und Geschäftswelten beigetragen. Dank dieser Kenntnisse und meiner beruflichen Kompetenz bin ich in der Lage – sowohl im europäisch-türkischen Raum, als auch darüber hinaus – Werte und Visionen auf höchster politischer, wirtschaftlicher und gesellschaftlicher Ebene zu vermitteln, diesbezüglich Vertrauen aufzubauen und Projekte zu entwickeln, und diese durch Netzwerke zu fördern.",
          skills: ["Verhandlungstechniken", "Networking & Public Affairs", "Politische Analyse", "Projektmanagement", "Organisationsplanung", "Krisenmanagement"],
          contact: {
            email: "info@skainsight.de"
          },
          cv: [
            {
              period: "2016 – 2020",
              title: "Generalkonsul der Türkei",
              company: "Köln, Deutschland",
              desc: "Leitung des Generalkonsulats, Pflege der bilateralen Beziehungen in Politik, Wirtschaft und Kultur."
            },
            {
              period: "2012 – 2016",
              title: "Botschaftsrat",
              company: "Türkische Botschaft, Berlin",
              desc: "Analyse der deutschen Innenpolitik, Kontaktpflege zu politischen Entscheidungsträgern, Think Tanks und Medien."
            },
            {
              period: "2009 – 2012",
              title: "Abteilungsleiter Westafrika",
              company: "Türkisches Außenministerium, Ankara",
              desc: "Koordination der diplomatischen Beziehungen mit westafrikanischen Staaten im Rahmen der türkischen Afrikapolitik. Besuche in Krisenregionen."
            },
            {
              period: "2005 – 2009",
              title: "Erster Sekretär",
              company: "Türkische Botschaft, Peking",
              desc: "Fokus auf die bilateralen türkisch-chinesischen Beziehungen und wirtschaftliche Zusammenarbeit."
            },
            {
              period: "Studium",
              title: "M.A. Internationale Volkswirtschaft",
              company: "Universität Göttingen",
              desc: "Fokus auf internationale Wirtschaftsbeziehungen."
            },
            {
              period: "Studium",
              title: "B.A. Internationale Beziehungen",
              company: "Bilgi Universität, Istanbul",
              desc: ""
            }
          ]
        },
        {
          id: 'aydin',
          name: "Metin Aydin",
          role: "Co-Founder · Skillmanagement & Transformation",
          img: "/images/metin-aydin.jpg",
          bio_short: ["Führungskraft Deutsche Telekom", "Head of Skillmanagement", "Gründungsmitglied BizNet e.V."],
          long_bio: "Metin Aydin ist eine erfahrene Führungskraft im Corporate-Umfeld mit einem starken Fokus auf Personal- und Organisationsentwicklung. Bei der Deutschen Telekom verantwortet er die strategische Kompetenzentwicklung, um das Unternehmen zukunftsfähig zu machen. Als Vorsitzender von NETU West engagiert er sich zudem für die Vernetzung europäisch-türkischer Unternehmen.",
          skills: ["Strategisches Skillmanagement", "Talent & Leadership Development", "Change Management", "Agile Transformation", "Corporate-Recruiting", "Vertriebsstrategie"],
          contact: {
            email: "info@skainsight.de"
          },
          cv: [
            {
              period: "Dez. 2022 – Heute",
              title: "Head of Skillmanagement",
              company: "Telekom Deutschland GmbH",
              desc: "Strategische Personal- und Kompetenzentwicklung zur Zukunftssicherung des Unternehmens."
            },
            {
              period: "2020 – Heute",
              title: "Vorsitzender",
              company: "NETU West e.V.",
              desc: "Leitung und Repräsentation des Netzwerks Europäisch-Türkischer Unternehmen in NRW."
            },
            {
              period: "2019 – 2022",
              title: "Tribe Lead Agile Program Management",
              company: "Telekom Deutschland GmbH",
              desc: "Führung eines agilen Tribes zur Entwicklung und Umsetzung von strategischen Programmen."
            },
            {
              period: "2006 – 2019",
              title: "Diverse Führungsrollen",
              company: "Telekom Deutschland GmbH",
              desc: "Langjährige Erfahrung in den Bereichen Talent- & Leadership-Entwicklung, Change-Management, Recruiting und Vertrieb."
            }
          ]
        }
      ]
    },
    references: {
      title: "Referenzen & Partner",
      note: "Eine Auswahl persönlicher Stationen und Kooperationen der Teammitglieder."
    },
    contact: {
      title: "Nehmen Sie Kontakt auf",
      text: "Lassen Sie uns über Ihre Ziele sprechen. Wir melden uns zeitnah mit einem Vorschlag.",
      labels: {
        name: "Ihr Name",
        email: "Ihre E-Mail",
        message: "Ihre Nachricht",
        send: "Nachricht senden",
        sending: "Wird gesendet..."
      },
      meta: "Oder schreiben Sie direkt an: info@skainsight.de",
      success: "Vielen Dank! Ihre Nachricht wurde empfangen.",
      error: "Fehler beim Senden.",
      geminiCta: "Strategische Einblicke generieren",
      geminiGenerating: "Analyse wird erstellt...",
      geminiError: "Analyse konnte nicht erstellt werden. Bitte versuchen Sie es später erneut.",
      geminiDisclaimer: "Dies ist eine KI-generierte Analyse. Kontaktieren Sie uns für eine umfassende Beratung.",
      geminiTitle: "Strategische Ersteinschätzung"
    },
    footer: {
      rights: `© ${new Date().getFullYear()} SKA Insights GbR. Alle Rechte vorbehalten.`,
      links: {
        imprint: "Impressum",
        privacy: "Datenschutz"
      }
    },
    imprint: {
      title: "Impressum",
      content: (
        <>
          <h3 className="text-lg font-bold mb-2">Angaben gemäß § 5 TMG</h3>
          <p>SKA Insights GbR<br />Friedrich-Karl-Straße 25<br />50739 Köln<br />Deutschland</p>
          <h3 className="text-lg font-bold mt-4 mb-2">Vertreten durch die Gesellschafter:</h3>
          <p>Abdullah Şentürk, Metin Aydin</p>
          <h3 className="text-lg font-bold mt-4 mb-2">Kontakt</h3>
          <p>E-Mail: info@skainsight.de<br />Website: www.skainsight.de</p>
          <h3 className="text-lg font-bold mt-4 mb-2">Umsatzsteuer-ID</h3>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />DE123456789</p>

          <h3 className="text-lg font-bold mt-6 mb-2">Haftung für Inhalte</h3>
          <p className="mb-3">Wir bemühen uns, die Inhalte unserer Seite aktuell zu halten. Trotz sorgfältiger Bearbeitung bleibt eine Haftung ausgeschlossen.</p>
          <p className="mb-3">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
          <p className="mb-3">Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Bei Bekanntwerden von Rechtsverletzungen, werden wir diese Inhalte umgehend entfernen. Eine diesbezügliche Haftung übernehmen wir erst ab dem Zeitpunkt der Kenntnis einer möglichen Rechtsverletzung.</p>

          <h3 className="text-lg font-bold mt-6 mb-2">Haftung für Links</h3>
          <p className="mb-3">Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Für die Inhalte und die Richtigkeit der Informationen verlinkter Websites fremder Informationsanbieter wird keine Gewähr übernommen.</p>
          <p className="mb-3">Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße ohne Beanstandung überprüft. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

          <h3 className="text-lg font-bold mt-6 mb-2">Urheberrecht</h3>
          <p className="mb-3">Die durch die Seitenbetreiber/Diensteanbieter erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>

          <h3 className="text-lg font-bold mt-6 mb-2">Datenschutz</h3>
          <p className="mb-3">Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Eine Vertraulichkeit im Hinblick auf die Datenschutzbestimmungen wird nur unter der vorstehenden Einschränkung gewährleistet. Insbesondere sollen alle Mitteilungen von personenbezogenen Daten über das Internet nur erfolgen, soweit nicht Rechte Dritter berührt werden. Es sei denn der Dritte hat in Kenntnis der vorstehenden Sicherheitslücken ebenfalls seine Zustimmung erklärt. Eine Haftung des Seitenbetreibers/Diensteanbieters wird für die durch solche Sicherheitslücken entstehenden Schäden oder Unterlassungsansprüche ausgeschlossen.</p>
          <p className="mb-3">Der Nutzung von allen veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung wird widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.</p>
        </>
      )
    },
    privacy: {
      title: "Datenschutzerklärung",
      content: (
        <>
          <h3 className="text-lg font-bold mb-2">reCAPTCHA</h3>
          <p className="mb-3">Zum Schutz Ihrer Anfragen per Internetformular verwenden wir den Dienst reCAPTCHA des Unternehmens Google LLC (Google). Die Abfrage dient der Unterscheidung, ob die Eingabe durch einen Menschen oder missbräuchlich durch automatisierte, maschinelle Verarbeitung erfolgt. Die Abfrage schließt den Versand der IP-Adresse und ggf. weiterer von Google für den Dienst reCAPTCHA benötigter Daten an Google ein. Zu diesem Zweck wird Ihre Eingabe an Google übermittelt und dort weiter verwendet. Ihre IP-Adresse wird von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung dieses Dienstes auszuwerten. Die im Rahmen von reCaptcha von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Für diese Daten gelten die abweichenden Datenschutzbestimmungen des Unternehmens Google. Weitere Informationen zu den Datenschutzrichtlinien von Google finden Sie unter: https://policies.google.com/privacy?hl=de</p>

          <h3 className="text-lg font-bold mt-6 mb-2">Datenschutz</h3>
          <p className="mb-3">Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Eine Vertraulichkeit im Hinblick auf die Datenschutzbestimmungen wird nur unter der vorstehenden Einschränkung gewährleistet. Insbesondere sollen alle Mitteilungen von personenbezogenen Daten über das Internet nur erfolgen, soweit nicht Rechte Dritter berührt werden. Es sei denn der Dritte hat in Kenntnis der vorstehenden Sicherheitslücken ebenfalls seine Zustimmung erklärt. Eine Haftung des Seitenbetreibers/Diensteanbieters wird für die durch solche Sicherheitslücken entstehenden Schäden oder Unterlassungsansprüche ausgeschlossen.</p>

          <p className="mb-3">Der Nutzung von allen veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung wird widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.</p>
        </>
      )
    }
  },
  en: {
    nav: {
      mission: "Mission",
      services: "Services",
      approach: "Approach",
      about: "About",
      contact: "Contact"
    },
    hero: {
      kicker: "Consulting · Project Development · Management",
      title: <>Building Bridges.<br/>Creating Value.</>,
      subtitle: "We design and implement structures to strengthen the economic and political relations between Germany and Turkey.",
      ctaPrimary: "Schedule a talk"
    },
    mission: {
      title: "Our Mission",
      text: "Building sustainable structures that strengthen the economic, political, and bilateral relations between Germany and Turkey requires time, experience, and strong leadership. We bring together companies, civil society, media, and decision-makers to achieve positive outcomes for the citizens of both countries.",
      note: "We create connections that last."
    },
    services: {
      title: "Our Core Competencies",
      items: [
        {
          id: 'consulting',
          name: "Strategic Consulting",
          desc: "Comprehensive analyses, market & stakeholder mapping, public affairs, and risk & opportunity assessments.",
          detail: "In strategic consulting, we offer tailored solutions based on in-depth analyses of the German-Turkish market. We identify relevant political and economic actors, assess potential risks, and uncover untapped opportunities for you."
        },
        {
          id: 'development',
          name: "Project Development",
          desc: "From concept and partner search to funding scouting (DE/TR/EU) and scalable roadmaps.",
          detail: "We guide you from the initial idea to final implementation, developing innovative project concepts and finding suitable cooperation partners in Germany and Turkey."
        },
        {
          id: 'management',
          name: "Process Management",
          desc: "Efficient program and project steering, KPI tracking, compliance, governance, and change & crisis management.",
          detail: "Excellent management is key to project success. We handle the control of complex programs, define and monitor relevant KPIs, and ensure compliance with all guidelines."
        }
      ]
    },
    approach: {
      title: "Our Approach",
      kicker: "How we work",
      points: [
        {
          head: "Intercultural Expertise",
          body: "Deep understanding of the legal frameworks, business etiquette, and culture of both countries."
        },
        {
          head: "Impactful Networks",
          body: "We connect the right partners from business, associations, media, and politics in a goal-oriented and transparent manner."
        },
        {
          head: "Pragmatic Implementation",
          body: "Clear milestones, measurable KPIs, and rigorous risk management for swift realization."
        }
      ]
    },
    about: {
      title: "About Us",
      text: "We bring many years of experience from international trade, industry, telecommunications, law, diplomacy, and public affairs.\n\nThe SKA Insight team therefore has extensive expertise in business development, import & export, sales strategy, administration, personnel and organizational development, skill management, negotiation, and protocol."
    },
    team: {
      title: "The Founding Team",
      back_to_overview: "Back to overview",
      professional_history: "Professional History",
      core_competencies: "Core Competencies",
      members: [
        {
          id: 'senturk',
          name: "Abdullah Şentürk",
          role: "Co-Founder · Entrepreneur & Sales",
          img: "/images/abdullah-senturk.jpg",
          bio_short: ["Managing Director KA-EN GmbH", "International Trade", "Degree in Physics"],
          long_bio: "Abdullah Şentürk is a seasoned entrepreneur with over 25 years of experience in international trade. As the founder and CEO of KA-EN GmbH, he has built a global network in the paper and corrugated board industry and specializes in brokering complex machinery deals between Europe and Turkey.",
          skills: ["International Sales", "Business Development", "Negotiation", "Export & Import", "Paper Industry Expertise", "Intercultural Management"],
          cv: [
            {
              period: "1999 – Present",
              title: "Founder & CEO",
              company: "KA-EN GmbH",
              desc: "Management and strategic direction of the company with a focus on the international purchase and sale of machinery for the paper and corrugated board industry. Building and maintaining a global network of customers and suppliers."
            },
            {
              period: "Studies",
              title: "Degree in Physics",
              company: "Yıldız Technical University, Istanbul",
              desc: "Studied physics with a focus on material sciences and technical applications."
            }
          ]
        },
        {
          id: 'kaya',
          name: "Turhan Kaya",
          role: "Co-Founder · Diplomacy & Public Affairs",
          img: "/images/turhan-kaya.jpg",
          bio_short: ["Former Consul General", "Diplomatic Service", "M.A. Uni Göttingen"],
          long_bio: "Through his many years of diplomatic service as Consul General in Cologne and as Embassy Counselor in Berlin, Turhan Kaya has built close contacts with German and Turkish business, economic, political, and media circles over the last decade. His deep understanding of both cultures enables him to convey values and visions at the highest level, build trust, and promote projects through strategic networks.",
          skills: ["Negotiation Techniques", "Networking & Public Affairs", "Political Analysis", "Project Management", "Organizational Planning", "Crisis Management"],
          contact: {
            email: "info@skainsight.de"
          },
          cv: [
            {
              period: "2016 – 2020",
              title: "Consul General of Turkey",
              company: "Cologne, Germany",
              desc: "Head of the Consulate General, maintaining bilateral relations in politics, economy, and culture."
            },
            {
              period: "2012 – 2016",
              title: "Embassy Counselor",
              company: "Turkish Embassy, Berlin",
              desc: "Analysis of German domestic policy, maintaining contacts with political decision-makers, think tanks, and media."
            },
            {
              period: "2009 – 2012",
              title: "Head of West Africa Department",
              company: "Turkish Ministry of Foreign Affairs, Ankara",
              desc: "Coordination of diplomatic relations with West African states within the framework of Turkey's Africa policy. Visits to crisis regions."
            },
            {
              period: "2005 – 2009",
              title: "First Secretary",
              company: "Turkish Embassy, Beijing",
              desc: "Focus on bilateral Turkish-Chinese relations and economic cooperation."
            },
            {
              period: "Studies",
              title: "M.A. International Economics",
              company: "University of Göttingen",
              desc: "Focus on international economic relations."
            },
            {
              period: "Studies",
              title: "B.A. International Relations",
              company: "Bilgi University, Istanbul",
              desc: ""
            }
          ]
        },
        {
          id: 'aydin',
          name: "Metin Aydin",
          role: "Co-Founder · Skill Management & Transformation",
          img: "/images/metin-aydin.jpg",
          bio_short: ["Leader at Deutsche Telekom", "Head of Skill Management", "Founding Member BizNet e.V."],
          long_bio: "Metin Aydin is an experienced corporate leader with a strong focus on personnel and organizational development. At Deutsche Telekom, he is responsible for strategic skill development to make the company future-proof. As Chairman of NETU West, he is also committed to networking European-Turkish companies.",
          skills: ["Strategic Skill Management", "Talent & Leadership Development", "Change Management", "Agile Transformation", "Corporate Recruiting", "Sales Strategy"],
          contact: {
            email: "info@skainsight.de"
          },
          cv: [
            {
              period: "Dec 2022 – Present",
              title: "Head of Skill Management",
              company: "Telekom Deutschland GmbH",
              desc: "Strategic development of personnel and skills to future-proof the company."
            },
            {
              period: "2020 – Present",
              title: "Chairman",
              company: "NETU West e.V.",
              desc: "Leadership and representation of the Network of European-Turkish Entrepreneurs in NRW."
            },
            {
              period: "2019 – 2022",
              title: "Tribe Lead Agile Program Management",
              company: "Telekom Deutschland GmbH",
              desc: "Leadership of an agile tribe for the development and implementation of strategic programs."
            },
            {
              period: "2006 – 2019",
              title: "Various Leadership Roles",
              company: "Telekom Deutschland GmbH",
              desc: "Extensive experience in talent & leadership development, change management, recruiting, and sales."
            }
          ]
        }
      ]
    },
    references: {
      title: "References & Partners",
      note: "A selection of the team members' personal stations and collaborations."
    },
    contact: {
      title: "Get in Touch",
      text: "Let's discuss your goals. We will get back to you shortly with a proposal.",
      labels: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send Message",
        sending: "Sending..."
      },
      meta: "Or write directly to: info@skainsight.de",
      success: "Thank you! Your message has been received.",
      error: "Error sending message.",
      geminiCta: "Generate Strategic Insights",
      geminiGenerating: "Generating analysis...",
      geminiError: "Could not generate analysis. Please try again later.",
      geminiDisclaimer: "This is an AI-generated analysis. Please contact us for a comprehensive consultation.",
      geminiTitle: "Initial Strategic Assessment"
    },
    footer: {
      rights: `© ${new Date().getFullYear()} SKA Insights GbR. All rights reserved.`,
      links: {
        imprint: "Imprint",
        privacy: "Privacy Policy"
      }
    },
    imprint: {
      title: "Imprint",
      content: (
        <>
          <p>Content according to § 5 TMG. Placeholder text...</p>
        </>
      )
    },
    privacy: {
      title: "Privacy Policy",
      content: (
        <>
          <p>Privacy Policy placeholder text...</p>
        </>
      )
    }
  },
  tr: {
    nav: {
      mission: "Misyon",
      services: "Hizmetler",
      approach: "Yaklaşım",
      about: "Hakkımızda",
      contact: "İletişim"
    },
    hero: {
      kicker: "Danışmanlık · Proje Geliştirme · Yönetim",
      title: <>Köprüler kurmak.<br/>Değerler yaratmak.</>,
      subtitle: "Almanya ve Türkiye arasındaki ekonomik ve siyasi ilişkileri güçlendirmek için yapılar tasarlıyor ve uyguluyoruz.",
      ctaPrimary: "Görüşme ayarla"
    },
    mission: {
      title: "Misyonumuz",
      text: "Almanya ve Türkiye arasındaki ekonomik, siyasi ve ikili ilişkileri güçlendiren sürdürülebilir yapılar inşa etmek; zaman, deneyim ve güçlü bir liderlik gerektirir. Her iki ülke vatandaşları için olumlu sonuçlar elde etmek amacıyla şirketleri, sivil toplumu, medyayı ve karar vericileri bir araya getiriyoruz.",
      note: "Kalıcı bağlar kuruyoruz."
    },
    services: {
      title: "Ana Yetkinliklerimiz",
      items: [
        {
          id: 'consulting',
          name: "Stratejik Danışmanlık",
          desc: "Kapsamlı analizler, pazar ve paydaş haritalaması, halkla ilişkiler ve risk ve fırsat değerlendirmeleri.",
          detail: "Stratejik danışmanlık alanında, Alman-Türk pazarına yönelik derinlemesine analizlere dayalı özel çözümler sunuyoruz."
        },
        {
          id: 'development',
          name: "Proje Geliştirme",
          desc: "Konsept oluşturma, ortak arama, fon sağlama (DE/TR/AB) ve ölçeklenebilir yol haritalarına kadar.",
          detail: "İlk fikirden nihai uygulamaya kadar size rehberlik ediyor, yenilikçi proje konseptleri geliştiriyoruz."
        },
        {
          id: 'management',
          name: "Süreç Yönetimi",
          desc: "Verimli program ve proje yönetimi, KPI takibi, uyumluluk, yönetişim ve değişim ve kriz yönetimi.",
          detail: "Mükemmel yönetim, proje başarısının anahtarıdır. Karmaşık programların kontrolünü üstlenir ve ilgili KPI'ları tanımlarız."
        }
      ]
    },
    approach: {
      title: "Yaklaşımımız",
      kicker: "Nasıl çalışıyoruz",
      points: [
        {
          head: "Kültürlerarası Uzmanlık",
          body: "Her iki ülkenin yasal çerçeveleri, iş görgü kuralları ve kültürü hakkında derinlemesine anlayış."
        },
        {
          head: "Etkili Ağlar",
          body: "İş dünyası, dernekler, medya ve siyasetten doğru ortakları hedef odaklı ve şeffaf bir şekilde birleştiriyoruz."
        },
        {
          head: "Pragmatik Uygulama",
          body: "Hızlı bir gerçekleştirme için net kilometre taşları, ölçülebilir KPI'lar ve sıkı risk yönetimi."
        }
      ]
    },
    about: {
      title: "Hakkımızda",
      text: "Uluslararası ticaret, sanayi, telekomünikasyon, hukuk, diplomasi ve halkla ilişkiler alanlarında uzun yıllara dayanan deneyime sahibiz.\n\nSKA Insight ekibi, iş geliştirme, ithalat ve ihracat, satış stratejisi, yönetim, personel ve organizasyon geliştirme, yetenek yönetimi, müzakere ve protokol konularında kapsamlı uzmanlığa sahiptir."
    },
    team: {
      title: "Kurucu Ekip",
      back_to_overview: "Genel bakışa dön",
      professional_history: "Profesyonel Geçmiş",
      core_competencies: "Temel Yetkinlikler",
      members: [
        {
          id: 'senturk',
          name: "Abdullah Şentürk",
          role: "Kurucu Ortak · Girişimci ve Satış",
          img: "/images/abdullah-senturk.jpg",
          bio_short: ["KA-EN GmbH Genel Müdürü", "Uluslararası Ticaret", "Fizik Mezunu"],
          long_bio: "Abdullah Şentürk, uluslararası ticarette 25 yılı aşkın deneyime sahip tecrübeli bir girişimcidir. KA-EN GmbH'nin kurucusu ve CEO'su olarak, kağıt ve oluklu mukavva endüstrisinde küresel bir ağ kurmuş ve Avrupa ile Türkiye arasında karmaşık makine anlaşmalarında uzmanlaşmıştır.",
          skills: ["Uluslararası Satış", "İş Geliştirme", "Müzakere", "İhracat ve İthalat", "Kağıt Sanayii Uzmanlığı", "Kültürlerarası Yönetim"],
          cv: [
            {
              period: "1999 – Bugün",
              title: "Kurucu & Genel Müdür",
              company: "KA-EN GmbH",
              desc: "Kağıt ve oluklu mukavva endüstrisi için uluslararası makine alım satımına odaklanan şirketin yönetimi ve stratejik yönlendirilmesi. Küresel bir müşteri ve tedarikçi ağının kurulması ve sürdürülmesi."
            },
            {
              period: "Eğitim",
              title: "Fizik Diploması",
              company: "Yıldız Teknik Üniversitesi, İstanbul",
              desc: "Malzeme bilimleri ve teknik uygulama odaklı fizik eğitimi."
            }
          ]
        },
        {
          id: 'kaya',
          name: "Turhan Kaya",
          role: "Kurucu Ortak · Diplomasi ve Halkla İlişkiler",
          img: "/images/turhan-kaya.jpg",
          bio_short: ["Eski Başkonsolos", "Diplomatik Hizmet", "M.A. Uni Göttingen"],
          long_bio: "Köln'de Başkonsolos ve Berlin'de Elçilik Müsteşarı olarak uzun yıllara dayanan diplomatik hizmeti sayesinde Turhan Kaya, son on yılda Alman ve Türk iş, ekonomi, siyaset ve medya çevreleriyle yakın temaslar kurmuştur. Her iki kültürü derinlemesine anlaması, en üst düzeyde değerleri ve vizyonları aktarmasına, güven oluşturmasına ve stratejik ağlar aracılığıyla projeleri teşvik etmesine olanak tanımaktadır.",
          skills: ["Müzakere Teknikleri", "Ağ Kurma ve Halkla İlişkiler", "Siyasi Analiz", "Proje Yönetimi", "Organizasyon Planlaması", "Kriz Yönetimi"],
          contact: {
            email: "info@skainsight.de"
          },
          cv: [
            {
              period: "2016 – 2020",
              title: "Türkiye Başkonsolosu",
              company: "Köln, Almanya",
              desc: "Başkonsolosluk yönetimi, siyaset, ekonomi ve kültür alanlarında ikili ilişkilerin sürdürülmesi."
            },
            {
              period: "2012 – 2016",
              title: "Elçilik Müsteşarı",
              company: "T.C. Berlin Büyükelçiliği",
              desc: "Alman iç politikasının analizi, siyasi karar vericiler, düşünce kuruluşları ve medya ile temasların sürdürülmesi."
            },
            {
              period: "2009 – 2012",
              title: "Batı Afrika Dairesi Başkanı",
              company: "T.C. Dışişleri Bakanlığı, Ankara",
              desc: "Türkiye'nin Afrika politikası çerçevesinde Batı Afrika devletleriyle diplomatik ilişkilerin koordinasyonu. Kriz bölgelerine ziyaretler."
            },
            {
              period: "2005 – 2009",
              title: "Birinci Sekreter",
              company: "T.C. Pekin Büyükelçiliği",
              desc: "İkili Türk-Çin ilişkileri ve ekonomik işbirliğine odaklanma."
            },
            {
              period: "Eğitim",
              title: "M.A. Uluslararası Ekonomi",
              company: "Göttingen Üniversitesi",
              desc: "Uluslararası ekonomik ilişkilere odaklanma."
            },
            {
              period: "Eğitim",
              title: "B.A. Uluslararası İlişkiler",
              company: "Bilgi Üniversitesi, İstanbul",
              desc: ""
            }
          ]
        },
        {
          id: 'aydin',
          name: "Metin Aydin",
          role: "Kurucu Ortak · İnsan Kaynakları ve Personel Geliştirme",
          img: "/images/metin-aydin.jpg",
          bio_short: ["Deutsche Telekom'da Yönetici", "Personel Geliştirme Dairesi Başkanı", "BizNet e.V. Kurucu Üyesi"],
          long_bio: "Metin Aydın, personel ve organizasyonel gelişim odaklı deneyimli bir kurumsal yöneticidir. Deutsche Telekom'da şirketi geleceğe hazırlamak için stratejik yetenek gelişiminden sorumludur. BizNet e.V. Kurucu Üyesi olarak, Avrupalı-Türk şirketlerinin ağ oluşturmasına da kendini adamıştır.",
          skills: ["Stratejik Beceri Yönetimi", "Yetenek ve Liderlik Gelişimi", "Değişim Yönetimi", "Çevik Dönüşüm", "Kurumsal İşe Alım", "Satış Stratejisi"],
          contact: {
            email: "info@skainsight.de"
          },
          cv: [
            {
              period: "Ara 2022 – Bugün",
              title: "Personel Geliştirme Dairesi Başkanı",
              company: "Telekom Deutschland GmbH",
              desc: "Şirketin geleceğini güvence altına almak için stratejik personel ve beceri geliştirme."
            },
            {
              period: "2020 – Bugün",
              title: "Başkan",
              company: "NETU West e.V.",
              desc: "NRW'deki Avrupalı-Türk Girişimciler Ağı'nın liderliği ve temsili."
            },
            {
              period: "2019 – 2022",
              title: "Tribe Lideri Çevik Program Yönetimi",
              company: "Telekom Deutschland GmbH",
              desc: "Stratejik programların geliştirilmesi ve uygulanması için çevik bir kabilenin liderliği."
            },
            {
              period: "2006 – 2019",
              title: "Çeşitli Liderlik Rolleri",
              company: "Telekom Deutschland GmbH",
              desc: "Yetenek ve liderlik gelişimi, değişim yönetimi, işe alım ve satış alanlarında kapsamlı deneyim."
            }
          ]
        }
      ]
    },
    references: {
      title: "Referanslar ve Ortaklar",
      note: "Ekip üyelerinin kişisel görevlerinden ve işbirliklerinden bir seçki."
    },
    contact: {
      title: "İletişime Geçin",
      text: "Hedeflerinizi görüşelim. Kısa süre içinde bir teklifle size geri döneceğiz.",
      labels: {
        name: "Adınız",
        email: "E-postanız",
        message: "Mesajınız",
        send: "Mesaj Gönder",
        sending: "Gönderiliyor..."
      },
      meta: "Veya doğrudan yazın: info@skainsight.de",
      success: "Teşekkürler! Mesajınız alındı.",
      error: "Mesaj gönderilirken hata oluştu.",
      geminiCta: "Stratejik Analiz Oluştur",
      geminiGenerating: "Analiz oluşturuluyor...",
      geminiError: "Analiz oluşturulamadı. Lütfen daha sonra tekrar deneyin.",
      geminiDisclaimer: "Bu, yapay zeka tarafından oluşturulmuş bir analizdir. Kapsamlı bir danışmanlık için bizimle iletişime geçin.",
      geminiTitle: "Stratejik Ön Değerlendirme"
    },
    footer: {
      rights: `© ${new Date().getFullYear()} SKA Insights GbR. Tüm hakları saklıdır.`,
      links: {
        imprint: "Künye",
        privacy: "Gizlilik Politikası"
      }
    },
    imprint: {
      title: "Künye",
      content: (
        <>
          <p>§ 5 TMG uyarınca bilgiler. Yer tutucu metin...</p>
        </>
      )
    },
    privacy: {
      title: "Gizlilik Politikası",
      content: (
        <>
          <p>Gizlilik Politikası yer tutucu metni...</p>
        </>
      )
    }
  }
};
