window.AIB_DATA = window.AIB_DATA || {};
window.AIB_DATA.domains = window.AIB_DATA.domains || {};
(function(){ var d = window.AIB_DATA.domains["d3"]; if(!d){return;} d.quiz = d.quiz || []; d.quiz.push(
  {
    "id": "d3-q26",
    "skill": "3.1.1",
    "type": "single",
    "difficulty": "easy",
    "question": "An online travel agency deploys an autonomous pricing agent that adjusts hotel rates every few minutes. During a system fault the agent raises prices tenfold, and the revenue team discovers there is no way to pause the agent, cap its changes, or roll back to a previous pricing rule set. Which AWS responsible AI dimension does this situation MOST directly concern?",
    "options": [
      "Transparency",
      "Fairness",
      "Controllability",
      "Explainability"
    ],
    "answer": [2],
    "explanation": "Controllability is the AWS dimension that covers having mechanisms to monitor and steer AI system behavior, including the ability to pause, constrain, or roll back a system. An agent that nobody can stop or bound is a controllability failure. Transparency concerns communicating to stakeholders what the system does and its limitations; fairness concerns outcomes across groups of stakeholders; explainability concerns understanding why a particular output was produced. None of those dimensions addresses the core problem here, which is the absence of human control over a running system."
  },
  {
    "id": "d3-q27",
    "skill": "3.1.1",
    "type": "multi",
    "difficulty": "medium",
    "question": "An insurer's responsible AI office is cataloguing issues found during an internal review and mapping each one to the AWS responsible AI dimensions. Which TWO mappings are correct? (Select TWO.)",
    "options": [
      "A claims model returns noticeably different scores for near-identical inputs and fails when a data field is missing: veracity and robustness.",
      "The company publishes a model card describing the intended use, limitations and known risks of its underwriting model: transparency.",
      "Training data is encrypted and access is limited to approved roles: fairness.",
      "A claims handler can override a model recommendation and the override is logged: explainability.",
      "Declined policyholders receive the principal reasons for the decision: safety."
    ],
    "answer": [0, 1],
    "explanation": "Veracity and robustness cover whether a system produces correct outputs and behaves reliably under unexpected or adverse inputs, so unstable scores and failures on missing fields belong there. Publishing a model card about intended use and limitations is a transparency practice. Encrypting and restricting access to training data belongs to privacy and security, not fairness. The ability to override and log decisions is controllability rather than explainability. Giving applicants reasons for a decision is explainability, not safety, which concerns preventing harmful outputs."
  },
  {
    "id": "d3-q28",
    "skill": "3.1.2",
    "type": "single",
    "difficulty": "hard",
    "question": "A ride-hailing company's dynamic pricing model maximizes revenue, but analysis shows it consistently applies the highest surge multipliers in low-income districts during severe-weather events, when residents have the fewest transport alternatives. The growth team argues the model is simply responding to demand and that constraining it would cut quarterly revenue by 3 percent. What is the MOST appropriate way for the strategist to resolve this tradeoff?",
    "options": [
      "Keep the model unchanged because it accurately reflects market demand and the revenue impact of constraints is material.",
      "Introduce documented constraints such as surge caps during declared emergencies and fairness checks by district, accept the projected revenue reduction, and have the governance body approve and record the decision.",
      "Remove dynamic pricing entirely so that no group can be disadvantaged by the model.",
      "Ask the data science team to decide, because they understand the model's behavior best."
    ],
    "answer": [1],
    "explanation": "Navigating a tradeoff means making a deliberate, documented decision that balances the business objective against the responsible AI concern, which here involves fairness and potential harm to vulnerable people. Capping surge pricing in emergencies, testing outcomes by district, and recording the decision through governance does that while preserving most of the pricing capability. Leaving the model unchanged ignores a real harm and reputational and regulatory exposure. Abandoning dynamic pricing altogether is disproportionate to the specific problem. Delegating the decision to data scientists places an ethical and commercial judgment with a team that lacks the authority and the business context to make it."
  },
  {
    "id": "d3-q29",
    "skill": "3.1.2",
    "type": "single",
    "difficulty": "medium",
    "question": "A grocery retailer's marketing team wants a personalization model to use customers' precise location history and inferred health conditions because tests show these features raise campaign conversion by 8 percent. The privacy officer objects. Which option BEST balances the business objective with the privacy dimension of responsible AI?",
    "options": [
      "Use all available features because customers accepted the general terms of service when they joined the loyalty program.",
      "Limit the model to purchase history and explicitly consented preferences, exclude inferred sensitive attributes, and measure whether the remaining uplift still justifies the investment.",
      "Cancel the personalization program because any use of customer data creates privacy risk.",
      "Proceed with all features but anonymize the campaign reports that executives see."
    ],
    "answer": [1],
    "explanation": "Data minimization and purpose limitation are core to the privacy dimension: use only data that is necessary and that customers have meaningfully consented to, and avoid inferring sensitive attributes such as health conditions. Measuring the uplift of the constrained model turns the tradeoff into an informed business decision. Relying on generic terms of service does not amount to meaningful consent for sensitive inferences and invites regulatory and trust damage. Cancelling the program forfeits legitimate value when a proportionate option exists. Anonymizing reports does nothing about the underlying processing of sensitive data in the model."
  },
  {
    "id": "d3-q30",
    "skill": "3.1.3",
    "type": "single",
    "difficulty": "easy",
    "question": "A logistics company is about to issue a request for proposals (RFP) to buy a third-party AI tool that will screen job applications. The procurement lead says responsible AI reviews apply only to systems the company builds itself and can be considered after a vendor is selected. Which approach BEST reflects governance by design?",
    "options": [
      "Include responsible AI requirements such as bias-testing evidence, documentation of training data and limitations, and data-use terms in the RFP and contract before a vendor is selected.",
      "Select the vendor on functionality and price, then run a responsible AI review during the first production quarter.",
      "Rely on the vendor's marketing statement that its product is ethical and compliant.",
      "Apply responsible AI requirements only if a regulator later asks about the tool."
    ],
    "answer": [0],
    "explanation": "Governance by design means responsible AI considerations are built into the earliest decisions of an initiative, and for a purchased system the earliest decision is vendor selection. Writing requirements for bias testing, documentation and data use into the RFP and contract gives the company leverage and evidence before it is locked in. Reviewing only after selection leaves no negotiating power and may require costly rework. A vendor's marketing claims are not evidence. Waiting for a regulator to ask reverses the purpose of governance, which is to prevent problems rather than react to them."
  },
  {
    "id": "d3-q31",
    "skill": "3.1.4",
    "type": "multi",
    "difficulty": "medium",
    "question": "A telehealth provider is defining escalation criteria for a generative AI symptom-triage assistant that gives patients initial guidance before an appointment. Which THREE circumstances should automatically route the conversation to a human clinician? (Select THREE.)",
    "options": [
      "The assistant's grounding or confidence score for a response falls below a defined threshold.",
      "The patient describes emergency symptoms or expresses an intention to harm themselves.",
      "The patient's question falls outside the assistant's defined scope, such as requesting a prescription or a diagnosis.",
      "The patient writes in a language that the model supports.",
      "The assistant's response takes longer than two seconds to generate.",
      "The patient has used the assistant on a previous occasion."
    ],
    "answer": [0, 1, 2],
    "explanation": "Escalation criteria should be based on uncertainty, severity and scope. Low grounding or confidence signals that the answer may be unreliable, emergency or self-harm indications are high-severity situations that demand a human, and out-of-scope requests such as prescriptions or diagnoses exceed what the assistant is permitted to do. A supported language is a normal operating condition, not a reason to escalate. Response latency is a performance metric rather than a safety trigger. Prior use of the assistant says nothing about the risk of the current conversation."
  },
  {
    "id": "d3-q32",
    "skill": "3.2.1",
    "type": "single",
    "difficulty": "medium",
    "question": "A media company established an AI ethics board that meets quarterly and issues advisory opinions. An internal audit finds that no individual is accountable for any specific AI system, the board has no authority to block or require changes to a launch, and business units treat its opinions as optional. Which change would MOST improve the governance structure?",
    "options": [
      "Make the chief data officer personally accountable for the outcomes of every AI system in the company.",
      "Assign a named business owner who is accountable for each AI system, and give the board defined decision rights, escalation paths and a mandate that launches above a risk threshold require its approval.",
      "Replace the board with the data science team, since it understands the systems best.",
      "Increase the board's meeting frequency to monthly so that more opinions can be issued."
    ],
    "answer": [1],
    "explanation": "Effective AI governance requires clear accountability for each system, usually a business owner who lives with the outcomes, together with a cross-functional body that has real decision rights and escalation paths rather than advisory status. Making a single executive accountable for everything spreads responsibility too thinly and disconnects accountability from the people who make day-to-day decisions. Replacing the board with data scientists removes the cross-functional representation (legal, compliance, business, security) that governance needs. Meeting more often does not fix the absence of authority and ownership."
  },
  {
    "id": "d3-q33",
    "skill": "3.2.2",
    "type": "single",
    "difficulty": "medium",
    "question": "A software company sells a recruitment platform to employers in the European Union. Its product roadmap includes AI that ranks candidates and a feature that infers applicants' emotions during video interviews. The CEO asks which legal obligations apply and when. Which statement is MOST accurate?",
    "options": [
      "No obligations apply until the high-risk rules take effect, so both features can be shipped now and adjusted later.",
      "The EU AI Act's prohibitions, which cover practices such as emotion recognition in the workplace, have applied since February 2025, while the obligations for high-risk uses such as candidate ranking were deferred to December 2027 under the AI Omnibus.",
      "All EU AI Act obligations, including the prohibitions, were deferred to August 2028 by the AI Omnibus.",
      "Recruitment AI is classified as minimal risk, so only voluntary codes of conduct apply."
    ],
    "answer": [1],
    "explanation": "The EU AI Act's prohibited practices, which include emotion recognition in workplaces and education, have applied since 2 February 2025 and were not delayed. Recruitment and candidate-evaluation systems sit in the high-risk tier listed in Annex III, and the Digital Omnibus on AI moved those obligations to 2 December 2027, with rules for AI embedded in regulated products following in August 2028. Shipping an emotion-recognition feature now would already be unlawful. The Omnibus did not defer the prohibitions. Recruitment AI is explicitly high risk, not minimal risk."
  },
  {
    "id": "d3-q34",
    "skill": "3.2.2",
    "type": "multi",
    "difficulty": "hard",
    "question": "A United States consumer lender plans to use a complex machine learning model to approve or decline personal loan applications. Its compliance team is assessing regulatory risk under fair-lending and credit-reporting rules. Which TWO actions are REQUIRED to address the compliance risk? (Select TWO.)",
    "options": [
      "Ensure that applicants who are declined receive the specific principal reasons for the decision, even though the model is complex.",
      "Test the model for disparate impact on protected classes and exclude protected characteristics and close proxies from its inputs.",
      "Rely on the model vendor's written statement that the model is compliant with fair-lending law.",
      "Document that the model's complexity makes adverse action notices technically impossible and therefore not required.",
      "Record only the final approve or decline outcome, without retaining the inputs used for each decision."
    ],
    "answer": [0, 1],
    "explanation": "United States fair-lending law requires lenders to give applicants the specific principal reasons for adverse credit decisions, and regulators have confirmed that using a complex or opaque model does not remove this obligation. Lenders must also avoid discrimination, which means testing for disparate impact and excluding protected characteristics and proxies. A vendor's assurance does not transfer the lender's legal responsibility. Claiming that complexity excuses adverse action notices is the opposite of the regulator's position. Keeping only outcomes without inputs makes it impossible to explain decisions or demonstrate compliance to examiners."
  },
  {
    "id": "d3-q35",
    "skill": "3.2.3",
    "type": "single",
    "difficulty": "medium",
    "question": "A law firm builds a document assistant on Amazon Bedrock with a knowledge base containing files from every client matter. Associates discover that the assistant will answer questions about matters they are ethically walled off from. The firm's IT director states that because Amazon Bedrock is a managed service, protecting this data is AWS's responsibility. Which response is MOST accurate?",
    "options": [
      "The IT director is correct; AWS controls which users can retrieve which documents in a managed service.",
      "Under the shared responsibility model the firm is responsible for identity and access controls, so it must enforce document-level permissions in retrieval so each user sees only matters they are authorized to access, and log access for audit.",
      "The firm should add a system prompt instructing the model not to reveal restricted matters, which is sufficient to enforce confidentiality.",
      "Encrypting the knowledge base at rest resolves the issue because unauthorized users cannot read encrypted data."
    ],
    "answer": [1],
    "explanation": "AWS secures the underlying infrastructure and the managed service, but the customer remains responsible for its data, its identity and access management, and how its application decides who may retrieve what. The right control is permission-aware retrieval, with document-level access restrictions and audit logging. AWS cannot know the firm's ethical walls, so the claim that AWS controls user access is wrong. A prompt instruction is not an access control and can be bypassed. Encryption at rest protects data from infrastructure-level exposure but does nothing once an authorized application retrieves the document for the wrong user."
  },
  {
    "id": "d3-q36",
    "skill": "3.2.4",
    "type": "single",
    "difficulty": "medium",
    "question": "A manufacturer has adopted the NIST AI Risk Management Framework. It has documented the context, stakeholders and potential harms of each AI use case and has defined metrics and tests to assess those risks. However, when a test reveals an issue, there is no process to prioritize it, decide whether to treat, transfer or accept it, or assign resources to respond. Which NIST AI RMF function is the organization missing?",
    "options": [
      "Govern",
      "Map",
      "Measure",
      "Manage"
    ],
    "answer": [3],
    "explanation": "The NIST AI RMF has four functions. Map establishes context and identifies risks, which the manufacturer has done. Measure uses metrics and testing to analyze and track those risks, which it has also done. Manage is the function that prioritizes identified risks and allocates resources to treat, transfer, avoid or accept them, and that is exactly what is absent. Govern is the cross-cutting function that sets policies, roles and culture for risk management; although important, the scenario specifically describes the gap in responding to measured risks rather than in policies or accountability structures."
  },
  {
    "id": "d3-q37",
    "skill": "3.3.1",
    "type": "multi",
    "difficulty": "medium",
    "question": "An energy retailer's AI-driven tariff-recommendation model has been in production for a year. The only monitoring in place is an infrastructure dashboard showing uptime and response latency, and nobody is designated to act if the model's recommendations deteriorate. Which TWO additions would MOST strengthen risk controls for the system in production? (Select TWO.)",
    "options": [
      "Monitor model-quality and outcome metrics such as prediction distribution, input drift, override rates and customer complaints, with thresholds that trigger alerts.",
      "Assign a named owner and an incident playbook that defines who investigates alerts and when the model can be rolled back or suspended.",
      "Increase the uptime service-level target from 99.5 percent to 99.9 percent.",
      "Retrain the model every quarter regardless of whether its performance has changed.",
      "Add a question about the model to the annual customer satisfaction survey."
    ],
    "answer": [0, 1],
    "explanation": "Risk controls for AI in production must observe the behavior of the model and its business effects, not just whether the service is running, and they must connect alerts to accountable people who can act. Monitoring quality, drift and override metrics with thresholds addresses the first need; a named owner with an incident playbook and rollback authority addresses the second. A higher uptime target improves availability but says nothing about recommendation quality. Blind quarterly retraining may be wasteful or may introduce regressions without detecting actual problems. An annual survey is far too slow and indirect to act as a control."
  },
  {
    "id": "d3-q38",
    "skill": "3.3.2",
    "type": "single",
    "difficulty": "hard",
    "question": "A fintech company improves its generative AI budgeting assistant by retraining on thumbs-up and thumbs-down feedback collected in the app. Analysis shows that 85 percent of feedback comes from users under 30 living in major cities, while the customer base is far broader. Six months later, older and rural customers report that the assistant's advice feels irrelevant and they stop using it. What BEST describes the risk and the appropriate response?",
    "options": [
      "Bias can only enter a system through its original training data, so the feedback loop is safe and the complaints reflect normal preference differences.",
      "Bias has entered at the feedback and retraining stage: an unrepresentative feedback sample steers the model toward one group's preferences, so the company should sample feedback across customer segments and monitor outcomes and usage by segment over time.",
      "Feedback-driven improvement benefits all users equally, so the company should simply collect more feedback from the same channel.",
      "Because users voluntarily provided feedback, the company has no responsibility for the resulting drift in behavior."
    ],
    "answer": [1],
    "explanation": "Bias can be introduced at multiple lifecycle stages, including the post-deployment feedback and retraining loop, and it can drift over time. When feedback comes predominantly from one demographic, retraining amplifies that group's preferences and progressively degrades the experience for everyone else. The remedy is representative feedback sampling and ongoing monitoring of outcomes and adoption by segment. Claiming bias arises only in original training data is incorrect. More feedback from the same skewed channel would worsen the problem. Voluntary participation does not remove the company's responsibility for the effects of how it uses that feedback."
  },
  {
    "id": "d3-q39",
    "skill": "3.3.3",
    "type": "single",
    "difficulty": "medium",
    "question": "A consumer brand plans to have a generative AI image model produce its new logo and mascot entirely from a short text prompt, and intends to rely on copyright to stop competitors from copying them. What should the strategist advise about the intellectual property risk?",
    "options": [
      "Works created by the AI model automatically belong to whoever wrote the prompt and receive full copyright protection.",
      "Output generated by AI without meaningful human creative authorship may not qualify for copyright protection, so the company should ensure substantial human creative contribution, document it, and also rely on trademark protection for the brand assets.",
      "The model provider owns all images the model generates, so the company must license the logo from the provider.",
      "The provider's intellectual property indemnification guarantees that the company holds copyright in the output."
    ],
    "answer": [1],
    "explanation": "Copyright authorities such as the United States Copyright Office have stated that material generated purely by AI, without sufficient human creative authorship, is not protectable, which undermines a strategy that depends on copyright alone. Ensuring and documenting human creative input, and registering the logo and mascot as trademarks, gives the brand enforceable rights. Prompting alone has not been treated as sufficient authorship. Model providers typically do not claim ownership of customer outputs. Indemnification protects the customer against third-party infringement claims; it does not create or guarantee copyright in the output."
  },
  {
    "id": "d3-q40",
    "skill": "3.3.4",
    "type": "single",
    "difficulty": "easy",
    "question": "A consumer lender's credit-risk model performed well for three years. After the lender expanded into a new region with different income patterns and employment types, approval accuracy for new applicants fell sharply. No changes were made to the model, the code or the data pipeline. Which reliability risk BEST explains the decline, and what is the appropriate mitigation?",
    "options": [
      "Hallucination; add a retrieval layer so the model can cite source documents.",
      "Data pipeline failure; repair the extraction jobs so that fields are populated correctly.",
      "Data drift; the new population differs from the training data, so the lender should monitor input distributions, validate performance on the new segment and retrain with representative data.",
      "Overfitting; reduce the number of features in the model."
    ],
    "answer": [2],
    "explanation": "When a model's inputs shift away from the population it was trained on, its predictions degrade even though nothing about the model has changed; this is data drift, a core reliability risk. Monitoring input distributions, testing performance on the new segment and retraining on representative data is the standard mitigation. Hallucination is a generative AI phenomenon involving fabricated content, not a predictive scoring problem. A pipeline failure is ruled out because no data processes changed. Overfitting would have shown up as poor performance from the start rather than after a change in the applicant population."
  }
); })();
