window.AIB_DATA = window.AIB_DATA || {};
window.AIB_DATA.domains = window.AIB_DATA.domains || {};
(function(){ var d = window.AIB_DATA.domains["d2"]; if(!d){return;} d.quiz = d.quiz || []; d.quiz.push(
  {
    "id": "d2-q26",
    "skill": "2.1.1",
    "type": "single",
    "difficulty": "easy",
    "question": "An enterprise software company with 400 developers wants to apply generative AI in its software development function. The CTO asks the strategist to propose a use case that maps an AI capability to a measurable business outcome. Which proposal is MOST defensible?",
    "options": [
      "Deploy a code-generation and code-review assistant and measure the reduction in cycle time from ticket start to merged code against the current baseline",
      "Generate illustrations for the engineering blog and measure the number of social media likes",
      "Train a proprietary foundation model on the company's source code so that the company owns its own AI technology",
      "Deploy a chatbot that answers employee questions about the holiday policy and measure the number of chats started"
    ],
    "answer": [0],
    "explanation": "Software development is one of the functions where generative AI value concentrates, and coding assistance maps directly to a measurable operational outcome, developer cycle time, that can be compared with a baseline. Blog illustrations are low volume and social likes do not connect to a business objective. Training a proprietary foundation model is a technology-first idea with high cost and no defined business outcome. A holiday-policy chatbot is outside the software development function, and counting chats started is an activity metric, not a business outcome."
  },
  {
    "id": "d2-q27",
    "skill": "2.1.2",
    "type": "multi",
    "difficulty": "medium",
    "question": "A mid-size retailer is deciding whether to build, buy, or partner for an AI demand-forecasting capability. It has a two-person analytics team, a nine-month deadline, moderate budget, and no unusual regulatory constraints. Forecasting accuracy matters but is not the retailer's primary source of differentiation. Which TWO considerations are correct? (Select TWO.)",
    "options": [
      "Buying a proven forecasting product is likely to deliver value fastest because the capability is not a core differentiator and internal capacity is limited",
      "Partnering with an experienced consulting partner can close the capability gap for implementation while the internal team develops skills over time",
      "Building in-house is always cheaper over the long term, so the deadline should be extended to allow a custom build",
      "Vendor proposals should be compared primarily on the number of features listed",
      "Regulatory requirements can be ignored in buy decisions because the vendor assumes all compliance responsibility",
      "The retailer should build in-house to avoid any form of vendor pricing regardless of team size"
    ],
    "answer": [0, 1],
    "explanation": "Build-buy-partner decisions weigh budget, timelines, internal capabilities, vendor proposals, and compliance. A non-differentiating capability with a small team and a fixed deadline points toward buying a proven product, and a partner can accelerate delivery while transferring skills. Building is not always cheaper; it carries hidden costs for talent, maintenance, and time, and extending the deadline sacrifices business value. Feature counts say little about fit, total cost, data terms, or support. Compliance responsibility remains with the organization that uses the AI even when a vendor supplies it. Avoiding vendors on principle ignores the capacity constraint."
  },
  {
    "id": "d2-q28",
    "skill": "2.1.2",
    "type": "single",
    "difficulty": "hard",
    "question": "A bank evaluates three vendor proposals for an AI-based know-your-customer (KYC) document verification solution. The lowest-priced proposal also promises the fastest 12-week implementation, but its contract allows the vendor to use the bank's customer documents to train its own models and processes data in a jurisdiction the bank's regulator does not permit. What is the MOST appropriate response?",
    "options": [
      "Treat the data-use and data-residency terms as gating criteria and require the vendor to change them before the proposal can be considered, regardless of its price and speed advantages",
      "Accept the proposal because the price and implementation timeline are the most important factors for a business case",
      "Reject all vendors and build the solution in-house to avoid vendor contract issues entirely",
      "Accept the proposal and ask the compliance team to obtain a regulatory exemption after go-live"
    ],
    "answer": [0],
    "explanation": "Regulatory compliance requirements are a gating factor in build-buy-partner evaluations, especially for a regulated bank handling identity documents. Terms that permit vendor training on customer data and processing in a prohibited jurisdiction create legal and reputational exposure that no price advantage offsets; the correct move is to make acceptable terms a precondition. Price and timeline matter only once compliance gates are passed. Building in-house is a disproportionate reaction when other compliant vendors exist and the bank has not assessed its own capability to build. Seeking an exemption after deployment reverses the order of governance and could leave the bank in breach."
  },
  {
    "id": "d2-q29",
    "skill": "2.1.3",
    "type": "single",
    "difficulty": "medium",
    "question": "A grocery chain's AI steering committee reviews four pilots and must decide which one to scale now. Pilot A reduced stockouts 18 percent across 10 stores for two consecutive quarters, stayed within budget, aligns with the company's top priority of freshness, and runs on an automated data pipeline that already covers all stores. Pilot B achieved high model accuracy but depends on a weekly manual data extract performed by one analyst. Pilot C aligns with strategy but has not yet produced measurable results. Pilot D delivered savings but serves a product line the company has decided to exit. Which pilot should be scaled?",
    "options": [
      "Pilot A, because it demonstrates business value, feasibility, sustainability, and strategic alignment together",
      "Pilot B, because model accuracy is the strongest predictor of value at scale",
      "Pilot C, because strategic alignment outweighs the need for measured results",
      "Pilot D, because realized savings should always be scaled before anything else"
    ],
    "answer": [0],
    "explanation": "Scale decisions should rest on four criteria together: demonstrated business value, feasibility, sustainability, and strategic alignment. Pilot A meets all four, including a repeatable data pipeline that makes enterprise rollout realistic. Pilot B's reliance on a single person's manual extract is a sustainability failure that would break at scale, and accuracy alone is not business value. Pilot C should continue as a pilot until it shows measurable results; alignment without evidence does not justify scaling investment. Pilot D conflicts with the strategic decision to exit the product line, so its savings are temporary and the initiative should be wound down."
  },
  {
    "id": "d2-q30",
    "skill": "2.1.4",
    "type": "single",
    "difficulty": "medium",
    "question": "A hospital group wants to build an AI model that predicts which patients will miss appointments so that staff can intervene. During discovery, the strategist learns that 70 percent of missed appointments involve patients who never received a reminder because the reminder system sends messages to outdated phone numbers held in a legacy database. What should the strategist recommend?",
    "options": [
      "Fix the reminder process and contact-data quality first, then reassess whether a prediction model is still needed for the remaining no-shows",
      "Proceed with the prediction model because AI can compensate for the broken reminder process",
      "Build the prediction model and the reminder fix in parallel because both will be needed eventually",
      "Replace the reminder system with a generative AI assistant that calls patients to confirm appointments"
    ],
    "answer": [0],
    "explanation": "AI is not the appropriate solution when the root cause is a broken process or poor data rather than a prediction problem. Most of the no-shows have a known, deterministic cause that a process and data fix removes cheaply and certainly; only afterwards can the hospital judge whether the residual problem warrants a model. A model cannot compensate for reminders that never arrive, and it would be trained on data distorted by the process failure. Parallel investment spends AI budget before the problem is understood. A generative AI calling assistant would still rely on the same outdated phone numbers."
  },
  {
    "id": "d2-q31",
    "skill": "2.1.5",
    "type": "multi",
    "difficulty": "medium",
    "question": "An insurer is transitioning its manual claims-triage process to an AI-based triage solution that will route claims to adjusters. Leadership is concerned about business continuity and performance impact during the transition. Which TWO actions address those concerns MOST directly? (Select TWO.)",
    "options": [
      "Run the AI triage in shadow mode alongside the manual process for a defined period and compare routing outcomes before any cutover",
      "Define a fallback path to manual triage with clear quality and availability thresholds that trigger it",
      "Retire the manual process on the first day of go-live so that adjusters are forced to adopt the new system",
      "Skip baseline measurement because the AI solution will generate its own performance metrics after launch",
      "Assume that inference costs at full volume will match the pilot costs because the same model is used",
      "Defer data-readiness checks until after go-live to avoid delaying the project"
    ],
    "answer": [0, 1],
    "explanation": "Transition planning for AI-based processes should protect continuity and measure performance impact. Shadow mode lets the insurer observe the AI's routing against the existing process without customer risk, and a defined fallback with thresholds ensures the business keeps operating if quality or availability drops. Retiring the manual process immediately removes the safety net. Without a pre-transition baseline, the insurer cannot judge whether performance improved or degraded. Inference costs scale with volume, so pilot costs do not predict full-scale costs. Data readiness should be confirmed before go-live, because poor input data directly degrades triage quality."
  },
  {
    "id": "d2-q32",
    "skill": "2.2.1",
    "type": "single",
    "difficulty": "medium",
    "question": "A property insurer is defining KPIs for a generative AI assistant that helps adjusters summarize claim files. Which KPI is the BEST defined for demonstrating business value?",
    "options": [
      "Reduce the average claim cycle time from 9.2 days to 6.5 days within 12 months of deployment while keeping customer satisfaction at or above its current score",
      "Improve the efficiency of the claims department",
      "Increase the number of prompts submitted to the assistant each week",
      "Achieve a summarization quality score of 0.9 on the model evaluation benchmark"
    ],
    "answer": [0],
    "explanation": "A well-defined KPI is specific, measurable, tied to a baseline, time-bound, and balanced against an intangible benefit such as customer satisfaction so that speed is not gained at the expense of service. The cycle-time target meets all of these conditions. A general aim to improve efficiency cannot be measured or compared with a baseline. Counting prompts is an activity or vanity metric: usage does not prove value and can rise while outcomes stay flat. A model quality score is a technical metric that matters to the delivery team but does not demonstrate business value to executives."
  },
  {
    "id": "d2-q33",
    "skill": "2.2.2",
    "type": "single",
    "difficulty": "easy",
    "question": "An online retailer will launch an AI-powered product search upgrade in six weeks and wants to prove its effect on sales. What should the team do BEFORE launch?",
    "options": [
      "Record current search conversion rate, search abandonment, and revenue per search session over a representative period that accounts for seasonality",
      "Wait until after launch and compare the first week of results with the vendor's published industry benchmarks",
      "Use the model's accuracy on its test dataset as the baseline for the business case",
      "Rely on the team's recollection of last year's conversion rate because historical reports are time-consuming to compile"
    ],
    "answer": [0],
    "explanation": "A baseline must be captured before the AI solution changes the process, using the same business metrics the initiative is meant to move and a period long enough to reflect normal variation such as seasonality; otherwise later improvements cannot be attributed to the AI. Vendor benchmarks describe other companies, not this retailer's starting point, and a post-launch comparison has no pre-launch reference. Model test accuracy is a technical measure, not a business baseline. Recollection is unreliable and not auditable, and the cost of compiling reports is small compared with the value of a credible business case."
  },
  {
    "id": "d2-q34",
    "skill": "2.2.3",
    "type": "single",
    "difficulty": "hard",
    "question": "A finance team is calculating first-year ROI for an AI document-processing initiative. Projected annual benefits are USD 600,000 in labor time savings, of which only 40 percent will be realized because freed time is redeployed rather than eliminated, plus USD 150,000 in error-reduction savings and USD 250,000 in revenue uplift. First-year costs are USD 180,000 in Amazon Bedrock consumption, USD 120,000 in software licensing, USD 200,000 in one-time change management and training, and USD 100,000 in ongoing monitoring staff. Using realized benefits and total first-year costs, what is the first-year ROI?",
    "options": [
      "Approximately 7 percent",
      "Approximately 60 percent",
      "Approximately 67 percent",
      "Approximately 150 percent"
    ],
    "answer": [0],
    "explanation": "Comprehensive ROI frameworks count only realized benefits and include every cost category, including one-time change management and ongoing operations. Realized benefits are USD 240,000 of labor savings plus USD 150,000 plus USD 250,000, a total of USD 640,000. Total first-year costs are USD 600,000. ROI equals (640,000 minus 600,000) divided by 600,000, about 6.7 percent. A figure near 60 percent results from omitting the one-time change-management cost. A figure near 67 percent results from counting the full theoretical labor savings as realized. A figure near 150 percent makes both mistakes at once, which is how inflated AI business cases are typically produced."
  },
  {
    "id": "d2-q35",
    "skill": "2.2.4",
    "type": "multi",
    "difficulty": "medium",
    "question": "A bank launched a generative AI assistant for 800 contact-center agents three weeks ago. The financial outcome, lower cost per contact, will not be reliably measurable for two quarters. The program sponsor wants leading indicators that predict whether the initiative is on track. Which TWO metrics are leading indicators? (Select TWO.)",
    "options": [
      "Percentage of agents who used the assistant at least three times in the past week",
      "Proportion of AI-drafted responses that agents accept with little or no editing",
      "Annual customer churn rate reported at fiscal year-end",
      "Total cost savings recognized in the annual financial statements",
      "Net Promoter Score from the next annual customer survey",
      "Number of foundation models available on the platform"
    ],
    "answer": [0, 1],
    "explanation": "Leading indicators are observable early and predict later outcomes. Active weekly adoption shows whether agents are actually using the tool, and the acceptance rate of AI drafts shows whether the output is good enough to change how work is done; together they predict the eventual cost-per-contact result. Annual churn, recognized cost savings, and an annual survey score are lagging indicators that confirm results long after the fact. The number of models available on the platform is a technology inventory measure with no relationship to this initiative's success."
  },
  {
    "id": "d2-q36",
    "skill": "2.2.5",
    "type": "multi",
    "difficulty": "medium",
    "question": "A retailer's generative AI customer assistant on Amazon Bedrock sends every request, including simple order-status questions, to the largest and most expensive model available. Monthly inference costs have doubled, and the finance team cannot see which applications generate the spend. Which TWO cost controls are MOST appropriate? (Select TWO.)",
    "options": [
      "Route simple requests to a smaller, lower-cost model, for example through model tiering or Amazon Bedrock Intelligent Prompt Routing, while reserving the largest model for complex requests",
      "Allocate Bedrock usage to each application and review the spend in AWS Cost Explorer with alerts when it exceeds the plan",
      "Move all traffic to Provisioned Throughput regardless of utilization because dedicated capacity is always cheaper",
      "Delete the assistant's system prompt and guardrails to reduce the number of tokens per request",
      "Train a custom foundation model from scratch on Amazon SageMaker AI to avoid paying for a third-party model",
      "Turn off usage monitoring and logging to reduce operational overhead"
    ],
    "answer": [0, 1],
    "explanation": "Matching model size to task complexity is a primary cost lever on consumption-based pricing; AWS states that Intelligent Prompt Routing can cut costs by up to 30 percent by sending simpler prompts to a smaller model in the same family. Allocating usage by application and reviewing it in Cost Explorer with alerts gives finance the visibility it lacks. Provisioned Throughput bills hourly whether or not capacity is used, so it suits steady high-volume workloads, not bursty traffic. Removing the system prompt and guardrails cuts tokens but sacrifices quality and safety. Training a model from scratch costs far more than inference. Monitoring is a prerequisite for cost control, not overhead."
  },
  {
    "id": "d2-q37",
    "skill": "2.3.1",
    "type": "single",
    "difficulty": "medium",
    "question": "A regional freight company learns that two national competitors have launched AI-driven dynamic pricing and real-time shipment-tracking features that customers now ask about in sales calls. The CEO asks the strategist to assess the competitive landscape. Which conclusion is MOST appropriate?",
    "options": [
      "Determine which AI capabilities have become table stakes that the company must match to stay in consideration, and separately identify where its own data and customer relationships could support a differentiated AI offering",
      "Copy every AI feature the competitors have announced as quickly as possible to eliminate the gap",
      "Ignore the competitors' moves because regional customers value personal relationships more than technology",
      "Conclude that the company is permanently disadvantaged because the competitors moved first"
    ],
    "answer": [0],
    "explanation": "Assessing a competitive landscape means distinguishing capabilities that have shifted customer expectations, which must be matched to remain in the market, from areas where the company's own assets create a genuine advantage. Blindly copying features is reactive, expensive, and does not build a sustainable position. Ignoring the shift is risky when customers are already raising it in sales conversations. First-mover status is not permanent; late movers often benefit from mature, lower-cost tools and from learning what customers actually value, so the disadvantage is recoverable with a focused strategy."
  },
  {
    "id": "d2-q38",
    "skill": "2.3.2",
    "type": "single",
    "difficulty": "hard",
    "question": "A law firm bills clients by the hour. A partner asks whether generative AI could transform the firm's business model rather than simply making lawyers faster. Which option BEST represents a business model transformation?",
    "options": [
      "Launch fixed-fee, productized legal services such as contract review subscriptions, in which AI performs the first pass and lawyers add judgment, changing how the firm earns revenue",
      "Use AI to let each lawyer complete research faster so that more billable hours fit into the week",
      "Reduce the number of junior associates while continuing to bill the same hourly rates",
      "Replace client-facing lawyers with a chatbot that answers legal questions without human review"
    ],
    "answer": [0],
    "explanation": "Business model transformation changes how value is created, delivered, and captured. Moving from hourly billing to AI-enabled, fixed-fee productized services alters the revenue model, the cost structure, and the client proposition. Faster research within hourly billing is an operational improvement that leaves the model intact and may even reduce revenue under hourly pricing. Cutting associates while keeping hourly rates is a cost change, not a new model, and raises talent-pipeline risks. A chatbot providing legal answers without review creates professional liability and regulatory exposure and is not a viable transformation."
  },
  {
    "id": "d2-q39",
    "skill": "2.3.3",
    "type": "single",
    "difficulty": "hard",
    "question": "A B2B logistics software company has built an AI feature on a commercially available foundation model, and the feature is popular. Competitors can license the same model. The CEO asks which action would MOST strengthen a sustainable competitive advantage from AI.",
    "options": [
      "Embed the AI insights deeply into customers' daily operational workflows and use their consented usage and outcome data to continually improve the feature, raising switching costs and compounding the data advantage",
      "Negotiate exclusive access to the foundation model so that competitors cannot license it",
      "Keep the AI feature unadvertised so that competitors are not prompted to build a similar one",
      "Replace the licensed foundation model with a model trained entirely in-house so that the company owns the intellectual property"
    ],
    "answer": [0],
    "explanation": "Sustainable advantage from AI rarely comes from the model itself, which competitors can license; it comes from proprietary data, workflow integration, and feedback loops in which each use improves the product, creating switching costs and compounding operational improvement. Exclusive access to a broadly available foundation model is not realistic. Hiding a popular feature forfeits its commercial value and does not prevent competitors from innovating. Training a model entirely in-house is costly and slow, and owning model intellectual property does not by itself create customer lock-in or a data advantage."
  },
  {
    "id": "d2-q40",
    "skill": "2.3.4",
    "type": "single",
    "difficulty": "hard",
    "question": "A grocery retailer operates in a market where its three largest competitors have run AI-driven personalization and demand forecasting for several years, and customers now expect personalized offers. The retailer has only small, disconnected pilots. The board asks what level of AI investment is appropriate. Which recommendation is MOST appropriate?",
    "options": [
      "Commit to a focused, substantial investment to reach parity on the capabilities that have become industry standard, then direct selective investment toward areas where the retailer can differentiate",
      "Adopt a wait-and-see posture and fund small experiments until the technology matures further",
      "Spread a modest budget evenly across many small pilots in every department to avoid picking wrong bets",
      "Direct the entire budget to training a proprietary foundation model to leapfrog the competitors"
    ],
    "answer": [0],
    "explanation": "Investment level should reflect industry maturity and competitive dynamics. When AI capabilities are mature in the industry and competitors already deliver them, the laggard faces erosion of share, so the right posture is decisive investment to close the gap on table stakes, followed by targeted bets on differentiation. Wait-and-see fits nascent markets, not one where customer expectations have already shifted. Spreading money thinly repeats the disconnected-pilot problem and reaches scale nowhere. Betting everything on a proprietary foundation model is a high-risk, slow path that ignores the readily available models competitors already use."
  }
); })();
