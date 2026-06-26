-- ===========================================================================
-- CoSai. × YBMT — Real Meta Ads lead import
-- ----------------------------------------------------------------------------
-- Generated:    2026-06-26T11:20:31.170Z
-- Source:       data/meta-ads-leads-2026.json (68 leads)
-- Idempotency:  Each row keyed by 'legacy-row=N' in quotes.notes
--               Reruns are safe — already-imported rows are skipped.
-- ===========================================================================

-- ─── Phase A · Upsert clients ──────────────────────────────────────────────

-- Lead row 2: Quayde (4bkeishamayswq@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Quayde', 'Residential', 'Quayde', '+61411606486', '4bkeishamayswq@gmail.com', 'Eagleby', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = '4bkeishamayswq@gmail.com');

-- Lead row 3: Dean Floyd (dcfloyd66@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Dean Floyd', 'Residential', 'Dean Floyd', '+61447206083', 'dcfloyd66@gmail.com', 'Perth', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'dcfloyd66@gmail.com');

-- Lead row 4: Lance Wolter (lance.wolter@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Lance Wolter', 'Residential', 'Lance Wolter', '+61401554453', 'lance.wolter@gmail.com', 'Forest Lake', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'lance.wolter@gmail.com');

-- Lead row 5: William Pua (wpua.consultant@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'William Pua', 'Residential', 'William Pua', '+61452157230', 'wpua.consultant@gmail.com', 'Burpengary', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'wpua.consultant@gmail.com');

-- Lead row 6: Natalia Melnikova (natalia.melnikova@bigpond.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Natalia Melnikova', 'Residential', 'Natalia Melnikova', '+61408120385', 'natalia.melnikova@bigpond.com', 'Warner', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'natalia.melnikova@bigpond.com');

-- Lead row 7: Tracey Heaton (traceyheaton22@outlook.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Tracey Heaton', 'Residential', 'Tracey Heaton', '+61422372777', 'traceyheaton22@outlook.com', 'Bellmere', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'traceyheaton22@outlook.com');

-- Lead row 8: annette paul (annette.paul@mindstatepsychology.com.au)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'annette paul', 'Residential', 'annette paul', '+61431202423', 'annette.paul@mindstatepsychology.com.au', 'Perth', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'annette.paul@mindstatepsychology.com.au');

-- Lead row 9: Anthony (anthonyltjc@bigpond.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Anthony', 'Residential', 'Anthony', '+61427124714', 'anthonyltjc@bigpond.com', 'Stanthorpe', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'anthonyltjc@bigpond.com');

-- Lead row 10: Mandeep Singh (jbmandeep_jb1@yahoo.co.in)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Mandeep Singh', 'Residential', 'Mandeep Singh', '+61421575143', 'jbmandeep_jb1@yahoo.co.in', 'Brisbane', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'jbmandeep_jb1@yahoo.co.in');

-- Lead row 11: Jakia Sultana (jakialovely9396@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Jakia Sultana', 'Residential', 'Jakia Sultana', '+61470210963', 'jakialovely9396@gmail.com', 'Canberra', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'jakialovely9396@gmail.com');

-- Lead row 12: Wan Philynthana (wanbophuet@outlook.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Wan Philynthana', 'Residential', 'Wan Philynthana', '+61417796916', 'wanbophuet@outlook.com', 'Weipa', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'wanbophuet@outlook.com');

-- Lead row 13: Zbyszek Jaworski (ozman1@interia.eu)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Zbyszek Jaworski', 'Residential', 'Zbyszek Jaworski', '+61406531989', 'ozman1@interia.eu', 'Tamborine Mountain', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'ozman1@interia.eu');

-- Lead row 14: Lawrence Boland (thegatekeeper48@hotmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Lawrence Boland', 'Residential', 'Lawrence Boland', '+61466438238', 'thegatekeeper48@hotmail.com', 'Brisbane', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'thegatekeeper48@hotmail.com');

-- Lead row 15: Ralph Gajdar (outbackboy91@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Ralph Gajdar', 'Residential', 'Ralph Gajdar', '+61401248312', 'outbackboy91@gmail.com', 'Innisfail', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'outbackboy91@gmail.com');

-- Lead row 16: Edward Tran (edwardctran@yahoo.com.au)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Edward Tran', 'Residential', 'Edward Tran', '+61402346133', 'edwardctran@yahoo.com.au', 'Brisbane', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'edwardctran@yahoo.com.au');

-- Lead row 17: Frank Oreb (frankoreb8@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Frank Oreb', 'Residential', 'Frank Oreb', '+61405223031', 'frankoreb8@gmail.com', 'Clear Island Waters', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'frankoreb8@gmail.com');

-- Lead row 18: Mel (mmellr27@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Mel', 'Residential', 'Mel', '+61455619121', 'mmellr27@gmail.com', 'Brisbane', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'mmellr27@gmail.com');

-- Lead row 19: Robbie Pooley (robpooley@hotmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Robbie Pooley', 'Residential', 'Robbie Pooley', '+61405011276', 'robpooley@hotmail.com', 'Gold Coast', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'robpooley@hotmail.com');

-- Lead row 20: Marky Mewton (markymewton63@hotmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Marky Mewton', 'Residential', 'Marky Mewton', '+61402449096', 'markymewton63@hotmail.com', 'Queensland', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'markymewton63@hotmail.com');

-- Lead row 21: Kerry Scott (scottygirlkd@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Kerry Scott', 'Residential', 'Kerry Scott', '+61402554108', 'scottygirlkd@gmail.com', 'Brisbane', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'scottygirlkd@gmail.com');

-- Lead row 22: Carolyn Nicholas-Ashman (carolynnicholas5@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Carolyn Nicholas-Ashman', 'Residential', 'Carolyn Nicholas-Ashman', '+61433813209', 'carolynnicholas5@gmail.com', 'Jamboree Heights', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'carolynnicholas5@gmail.com');

-- Lead row 23: Janeen Bougoure (illusions2011@bigpond.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Janeen Bougoure', 'Residential', 'Janeen Bougoure', '+61403150091', 'illusions2011@bigpond.com', 'Wellington Point', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'illusions2011@bigpond.com');

-- Lead row 24: Diana Maria (diana_gallego@hotmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Diana Maria', 'Residential', 'Diana Maria', '+61488358825', 'diana_gallego@hotmail.com', 'Carindale', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'diana_gallego@hotmail.com');

-- Lead row 25: Lilly Espinola (lelyarcher@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Lilly Espinola', 'Residential', 'Lilly Espinola', '+61405649373', 'lelyarcher@gmail.com', 'Brisbane', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'lelyarcher@gmail.com');

-- Lead row 26: Charlie Sciortino (charlie.sciortino49@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Charlie Sciortino', 'Residential', 'Charlie Sciortino', '+61426610599', 'charlie.sciortino49@gmail.com', 'Wurtulla', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'charlie.sciortino49@gmail.com');

-- Lead row 27: Robert Behan (rbehan64@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Robert Behan', 'Residential', 'Robert Behan', '+61450605646', 'rbehan64@gmail.com', 'Jimboomba', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'rbehan64@gmail.com');

-- Lead row 29: Steven Harrison (stharrison@outlook.com.au)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Steven Harrison', 'Residential', 'Steven Harrison', '+61419196633', 'stharrison@outlook.com.au', 'Auchenflower', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'stharrison@outlook.com.au');

-- Lead row 30: Maft (tra@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Maft', 'Residential', 'Maft', '+61400000000', 'tra@gmail.com', 'Eatons', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'tra@gmail.com');

-- Lead row 31: Jess Harman (jessharman74@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Jess Harman', 'Residential', 'Jess Harman', '+61400749223', 'jessharman74@gmail.com', 'Brighton', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'jessharman74@gmail.com');

-- Lead row 32: barrie john sibson (barsy3@bigpod.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'barrie john sibson', 'Residential', 'barrie john sibson', '+61741249410', 'barsy3@bigpod.com', 'Hervey Bay', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'barsy3@bigpod.com');

-- Lead row 33: James McAndrew (jamesmcandrew713@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'James McAndrew', 'Residential', 'James McAndrew', '+61466994593', 'jamesmcandrew713@gmail.com', 'Manly West', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'jamesmcandrew713@gmail.com');

-- Lead row 34: Rene Tarabay (renetarabay@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Rene Tarabay', 'Residential', 'Rene Tarabay', '+61414872401', 'renetarabay@gmail.com', 'Springwood', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'renetarabay@gmail.com');

-- Lead row 35: Nikita Chand (nikki_chand@hotmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Nikita Chand', 'Residential', 'Nikita Chand', '+61410033141', 'nikki_chand@hotmail.com', 'Brisbane', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'nikki_chand@hotmail.com');

-- Lead row 36: Eunice Dalgety (eunice.dalgety@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Eunice Dalgety', 'Residential', 'Eunice Dalgety', '+61424694435', 'eunice.dalgety@gmail.com', 'Brisbane', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'eunice.dalgety@gmail.com');

-- Lead row 38: Aketua Teariki (aketuateariki@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Aketua Teariki', 'Residential', 'Aketua Teariki', '+61424929435', 'aketuateariki@gmail.com', 'Gold Coast', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'aketuateariki@gmail.com');

-- Lead row 39: Donna Rennie (donnarennie70@hotmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Donna Rennie', 'Residential', 'Donna Rennie', '+61411295995', 'donnarennie70@hotmail.com', 'Benowa', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'donnarennie70@hotmail.com');

-- Lead row 40: Lizzie (eandm.pbd@outlook.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Lizzie', 'Residential', 'Lizzie', '+61755511296', 'eandm.pbd@outlook.com', 'Runaway Bay', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'eandm.pbd@outlook.com');

-- Lead row 41: Christine Mann (christine.mann@mail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Christine Mann', 'Residential', 'Christine Mann', '+61404828391', 'christine.mann@mail.com', 'Brighton', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'christine.mann@mail.com');

-- Lead row 42: Lynda Mckee (lyndamckee@bigpond.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Lynda Mckee', 'Residential', 'Lynda Mckee', '+61490493120', 'lyndamckee@bigpond.com', 'Brisbane', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'lyndamckee@bigpond.com');

-- Lead row 43: Aketua Teariki (aketuateariki+2@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Aketua Teariki', 'Residential', 'Aketua Teariki', '+61424929436', 'aketuateariki+2@gmail.com', 'Gold Coast', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'aketuateariki+2@gmail.com');

-- Lead row 44: Kim Pope (kimlpope68@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Kim Pope', 'Residential', 'Kim Pope', '+61425724489', 'kimlpope68@gmail.com', 'Augustine Heights', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'kimlpope68@gmail.com');

-- Lead row 45: Jennifer Harding (hardinje8@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Jennifer Harding', 'Residential', 'Jennifer Harding', '+61402679808', 'hardinje8@gmail.com', 'Carindale', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'hardinje8@gmail.com');

-- Lead row 46: Gracie Green (msw1412@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Gracie Green', 'Residential', 'Gracie Green', '+61413807129', 'msw1412@gmail.com', 'Brisbane', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'msw1412@gmail.com');

-- Lead row 47: Tania Walker (taniaewalker@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Tania Walker', 'Residential', 'Tania Walker', '+61435452961', 'taniaewalker@gmail.com', 'Toowoomba', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'taniaewalker@gmail.com');

-- Lead row 48: Helena Lamana (helenalamana@hotmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Helena Lamana', 'Residential', 'Helena Lamana', '+5551999071247', 'helenalamana@hotmail.com', 'Porto Alegre', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'helenalamana@hotmail.com');

-- Lead row 49: Zeljko Koscica (zeljkokoscica@icloud.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Zeljko Koscica', 'Residential', 'Zeljko Koscica', '+61438093576', 'zeljkokoscica@icloud.com', 'Runcorn', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'zeljkokoscica@icloud.com');

-- Lead row 50: Ruth Taiye Popoola (ruthpopoola_66@hotmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Ruth Taiye Popoola', 'Residential', 'Ruth Taiye Popoola', '+61406678912', 'ruthpopoola_66@hotmail.com', 'Cairns', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'ruthpopoola_66@hotmail.com');

-- Lead row 51: Airi Ingram (airileke.ingram@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Airi Ingram', 'Residential', 'Airi Ingram', '+61497686589', 'airileke.ingram@gmail.com', 'Peachester', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'airileke.ingram@gmail.com');

-- Lead row 52: Ginger (drgingersunrise@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Ginger', 'Residential', 'Ginger', '+61497110943', 'drgingersunrise@gmail.com', 'Logan', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'drgingersunrise@gmail.com');

-- Lead row 53: Aamod (aamodosho@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Aamod', 'Residential', 'Aamod', '+61431885657', 'aamodosho@gmail.com', 'Indooroopilly', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'aamodosho@gmail.com');

-- Lead row 54: Tricia Stroud (triciastroud73@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Tricia Stroud', 'Residential', 'Tricia Stroud', '+61400833607', 'triciastroud73@gmail.com', 'Brisbane', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'triciastroud73@gmail.com');

-- Lead row 55: Rob Monks (flaminskulls05@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Rob Monks', 'Residential', 'Rob Monks', '+61400614976', 'flaminskulls05@gmail.com', 'Brisbane', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'flaminskulls05@gmail.com');

-- Lead row 56: Vonda Czudaj (vonda.czudaj@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Vonda Czudaj', 'Residential', 'Vonda Czudaj', '+61427516688', 'vonda.czudaj@gmail.com', 'Capalaba', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'vonda.czudaj@gmail.com');

-- Lead row 57: Lance Zhou (lancezhou@msn.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Lance Zhou', 'Residential', 'Lance Zhou', '+61404064200', 'lancezhou@msn.com', 'Brisbane', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'lancezhou@msn.com');

-- Lead row 58: Siva Thaiavarayn (sivathaivarayan@hotmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Siva Thaiavarayn', 'Residential', 'Siva Thaiavarayn', '+61484777008', 'sivathaivarayan@hotmail.com', 'Shailer Park', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'sivathaivarayan@hotmail.com');

-- Lead row 59: Julia Beck (beckjulia33@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Julia Beck', 'Residential', 'Julia Beck', '+61451302675', 'beckjulia33@gmail.com', 'Queensland', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'beckjulia33@gmail.com');

-- Lead row 60: Stewart Johnson (redz26@outlook.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Stewart Johnson', 'Residential', 'Stewart Johnson', '+61417603945', 'redz26@outlook.com', 'Brisbane', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'redz26@outlook.com');

-- Lead row 61: Graham Ferguson (graferg01@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Graham Ferguson', 'Residential', 'Graham Ferguson', '+61415160974', 'graferg01@gmail.com', 'Burleigh Waters', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'graferg01@gmail.com');

-- Lead row 62: Izabela Pike (izabela.pike@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Izabela Pike', 'Residential', 'Izabela Pike', '+61431141020', 'izabela.pike@gmail.com', 'Parrearra', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'izabela.pike@gmail.com');

-- Lead row 63: Brian Stankovich (ned196bs@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Brian Stankovich', 'Residential', 'Brian Stankovich', '+61434789918', 'ned196bs@gmail.com', 'Dimbulah', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'ned196bs@gmail.com');

-- Lead row 64: Chandar Dutt (cdutt@sunshinesugar.com.au)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Chandar Dutt', 'Residential', 'Chandar Dutt', '+61412120186', 'cdutt@sunshinesugar.com.au', 'Gold Coast', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'cdutt@sunshinesugar.com.au');

-- Lead row 65: kansowa (kansowa3@hotmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'kansowa', 'Residential', 'kansowa', '+61422592989', 'kansowa3@hotmail.com', NULL, 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'kansowa3@hotmail.com');

-- Lead row 67: John Mizzi (mizzi4217@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'John Mizzi', 'Residential', 'John Mizzi', '+61404039399', 'mizzi4217@gmail.com', 'Surfers Paradise', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'mizzi4217@gmail.com');

-- Lead row 68: Alison Bates (aliharris093@hotmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Alison Bates', 'Residential', 'Alison Bates', '+61401238523', 'aliharris093@hotmail.com', 'Cairns', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'aliharris093@hotmail.com');

-- Lead row 69: Emmy Beveridge (jcbeveridge@yahoo.com.au)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Emmy Beveridge', 'Residential', 'Emmy Beveridge', '+61428280007', 'jcbeveridge@yahoo.com.au', NULL, 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'jcbeveridge@yahoo.com.au');

-- Lead row 70: Julie Hone (jlz68@hotmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Julie Hone', 'Residential', 'Julie Hone', '+61408704641', 'jlz68@hotmail.com', 'Clontarf Beach', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'jlz68@hotmail.com');

-- Lead row 71: Sue Taylor (dmtwaddell@gmail.com)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Sue Taylor', 'Residential', 'Sue Taylor', '+61478258792', 'dmtwaddell@gmail.com', 'Jimboomba', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'dmtwaddell@gmail.com');

-- Lead row 72: Cara Campbell (ccampbell@mtatravel.com.au)
INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)
SELECT 'Cara Campbell', 'Residential', 'Cara Campbell', '+61478227983', 'ccampbell@mtatravel.com.au', 'Gold Coast', 0
WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = 'ccampbell@mtatravel.com.au');

-- ─── Phase B · Insert quotes (one statement each — idempotent by legacy-row) ─
-- Quote-number allocation strategy: each INSERT computes its own number
-- inline as (MAX existing Q-YYYY-NNNN seq for the year) + 1, formatted with
-- printf('%04d', ...). Because we wrap in WHERE NOT EXISTS, re-running this
-- script is safe — already-imported leads are skipped and the MAX reflects
-- whatever sequence exists at that moment.

-- Lead row 2: Quayde → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = '4bkeishamayswq@gmail.com'),
  30, 11,
  'Timber decking — Eagleby', 'Meta Ads enquiry — Instagram, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
She lives in housing commission, couldnt afford a deck or doesnt want a deck. Apparently she only clicked on the ad and didnt fill out any details', NULL,
  3, 3, 6,
  '2026-03-22', '2026-03-21T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-03-22', 9, 'Housing commission resident — couldn''t afford and unsure if she even meant to enquire. Clicked the ad but didn''t complete details.',
  0, 'legacy-row=2 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=2 %'
);

-- Lead row 3: Dean Floyd → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'dcfloyd66@gmail.com'),
  30, 11,
  'Timber decking — Perth', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.', NULL,
  3, 3, 3,
  '2026-03-22', '2026-03-21T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-03-22', 9, 'Out of service area — lead is in Perth WA.',
  0, 'legacy-row=3 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=3 %'
);

-- Lead row 4: Lance Wolter → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'lance.wolter@gmail.com'),
  30, 1,
  'Timber decking — Forest Lake', 'Meta Ads enquiry — Instagram, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
voicemail // Corrina left mesasage again 2/4. tried again on 08/04. Called and texted again 10/04. Tried again 15/04. Maybe email or text? I try everything', NULL,
  3, 3, 6,
  '2026-03-22', '2026-03-21T23:00:00.000Z',
  '2026-03-25T00:00:00.000Z', '2026-04-15T04:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=4 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=4 %'
);

-- Lead row 5: William Pua → Stage 5
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'wpua.consultant@gmail.com'),
  30, 5,
  'Timber decking — Burpengary', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Booked in for 10/04. Good job. Big renovation. Sent quote — only sent the quote yesterday 14/04', NULL,
  3, 3, 3,
  '2026-03-22', '2026-03-21T23:00:00.000Z',
  '2026-03-25T00:00:00.000Z', '2026-04-14T06:00:00.000Z', '2026-04-14T06:00:00.000Z',
  NULL, NULL, NULL,
  0, 'legacy-row=5 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=5 %'
);

-- Lead row 6: Natalia Melnikova → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'natalia.melnikova@bigpond.com'),
  14, 11,
  'Bathroom renovation — Warner', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Seemed keen to begin with, shed already received a few quotes so was wanting a price over the phone prior to me attending. I stated we usually start at around $27k and we usually like to get our clients to supply fixtures, fittings, tiles etc. She was happy with that but just not the price. She was after under $22k', NULL,
  3, 1, 3,
  '2026-03-22', '2026-03-21T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-03-22', 1, 'Budget mismatch — client wanted under $22k; our bathroom renos start at ~$27k with client-supplied fixtures. She was happy with the model but not the price point.',
  0, 'legacy-row=6 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=6 %'
);

-- Lead row 7: Tracey Heaton → Stage 2
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'traceyheaton22@outlook.com'),
  30, 2,
  'Timber decking — Bellmere', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
I called her, have booked this in for tomorrow — Booked in for 17/04', NULL,
  3, 3, 3,
  '2026-03-24', '2026-03-23T23:00:00.000Z',
  '2026-03-25T00:00:00.000Z', '2026-03-25T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=7 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=7 %'
);

-- Lead row 8: annette paul → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'annette.paul@mindstatepsychology.com.au'),
  30, 11,
  'Timber decking — Perth', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Said no - lives in perth', NULL,
  3, 3, 3,
  '2026-03-25', '2026-03-24T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-03-25', 9, 'Out of service area — lives in Perth WA.',
  0, 'legacy-row=8 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=8 %'
);

-- Lead row 9: Anthony → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'anthonyltjc@bigpond.com'),
  14, 1,
  'Bathroom renovation — Stanthorpe', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Corrina called and left message', NULL,
  3, 1, 3,
  '2026-03-25', '2026-03-24T23:00:00.000Z',
  '2026-03-26T00:00:00.000Z', '2026-03-26T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=9 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=9 %'
);

-- Lead row 10: Mandeep Singh → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'jbmandeep_jb1@yahoo.co.in'),
  14, 11,
  'Bathroom renovation — Brisbane', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
didnt pick up, sent email 11/05. found someone else', NULL,
  3, 1, 3,
  '2026-03-25', '2026-03-24T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-03-25', 7, 'Found another contractor — didn''t pick up despite multiple attempts, sent email 11/05, ultimately said they''d gone with someone else.',
  0, 'legacy-row=10 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=10 %'
);

-- Lead row 11: Jakia Sultana → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'jakialovely9396@gmail.com'),
  14, 11,
  'Bathroom renovation — Canberra', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Said no - lives in Canberra', NULL,
  3, 1, 3,
  '2026-03-26', '2026-03-25T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-03-26', 9, 'Out of service area — lives in Canberra.',
  0, 'legacy-row=11 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=11 %'
);

-- Lead row 12: Wan Philynthana → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'wanbophuet@outlook.com'),
  30, 11,
  'Timber decking — Weipa', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Confused - does not want a bathroom renovation', NULL,
  3, 3, 3,
  '2026-03-26', '2026-03-25T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-03-26', 9, 'Out of area (Weipa, Far North QLD) and confused about the enquiry — didn''t want a deck/bathroom.',
  0, 'legacy-row=12 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=12 %'
);

-- Lead row 13: Zbyszek Jaworski → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'ozman1@interia.eu'),
  14, 11,
  'Bathroom renovation — Tamborine Mountain', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Confused - does not want a bathroom renovation', NULL,
  3, 1, 3,
  '2026-03-28', '2026-03-27T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-03-28', 9, 'Bad lead — confused, did not want a bathroom renovation.',
  0, 'legacy-row=13 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=13 %'
);

-- Lead row 14: Lawrence Boland → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'thegatekeeper48@hotmail.com'),
  30, 11,
  'Timber decking — Brisbane', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Voicemail and sent text saying the following - ''Good afternoon, Its Matthew from Your Building and Maintenance Team. Im just following up on your recent quote request. Please reply Yes or No if still interested. Please feel free to give me a call when you''re next available so we can book in a site inspection. Thank you for your Facebook enquiry, I look forward to hearing from you.'' They then replied with a ''NO''', NULL,
  3, 3, 3,
  '2026-03-28', '2026-03-27T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-03-28', 3, 'Replied ''NO'' to follow-up text after voicemail. Matt sent a polished follow-up message — client declined.',
  0, 'legacy-row=14 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=14 %'
);

-- Lead row 15: Ralph Gajdar → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'outbackboy91@gmail.com'),
  14, 11,
  'Bathroom renovation — Innisfail', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Corrina called - Client pressed by mistake', NULL,
  3, 1, 3,
  '2026-04-01', '2026-03-31T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-04-01', 9, 'Client pressed the ad by mistake — out of area (Innisfail, Far North QLD).',
  0, 'legacy-row=15 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=15 %'
);

-- Lead row 16: Edward Tran → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'edwardctran@yahoo.com.au'),
  14, 11,
  'Bathroom renovation — Brisbane', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Booked for 09/04. Hes not interested anymore. (completed site attendance)', NULL,
  3, 1, 3,
  '2026-04-01', '2026-03-31T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-04-01', 3, 'Site visit completed 09/04 — client subsequently said no, not interested anymore.',
  0, 'legacy-row=16 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=16 %'
);

-- Lead row 17: Frank Oreb → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'frankoreb8@gmail.com'),
  14, 1,
  'Bathroom renovation — Clear Island Waters', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Corrina called - left message to call back. Called and sent text 08/04. Called and texted again 10/04. Tried again 15/04', NULL,
  3, 1, 3,
  '2026-04-01', '2026-03-31T23:00:00.000Z',
  '2026-04-02T00:00:00.000Z', '2026-04-15T04:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=17 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=17 %'
);

-- Lead row 18: Mel → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'mmellr27@gmail.com'),
  14, 1,
  'Bathroom renovation — Brisbane', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Called and sent text. Called and texted again 10/04. Tried again 15/04. She text me back with her partners number, called and text him. and again 22/04', NULL,
  3, 1, 3,
  '2026-04-04', '2026-04-03T23:00:00.000Z',
  '2026-04-15T00:00:00.000Z', '2026-04-22T04:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=18 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=18 %'
);

-- Lead row 19: Robbie Pooley → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'robpooley@hotmail.com'),
  14, 11,
  'Bathroom renovation — Gold Coast', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Called - Number is not correct. I''m trying everything Corrina, see snippet', NULL,
  3, 1, 3,
  '2026-04-08', '2026-04-07T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-04-08', 9, 'Phone number is invalid — Matt tried email and other channels; lead unreachable despite being a real person per Facebook.',
  0, 'legacy-row=19 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=19 %'
);

-- Lead row 20: Marky Mewton → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'markymewton63@hotmail.com'),
  14, 1,
  'Bathroom renovation — Queensland', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Called and sent text. Tried again 15/04 and 22/04', NULL,
  3, 1, 3,
  '2026-04-09', '2026-04-08T23:00:00.000Z',
  '2026-04-10T00:00:00.000Z', '2026-04-22T04:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=20 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=20 %'
);

-- Lead row 21: Kerry Scott → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'scottygirlkd@gmail.com'),
  14, 1,
  'Bathroom renovation — Brisbane', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Called and sent text and again on 22/04', NULL,
  3, 1, 3,
  '2026-04-11', '2026-04-10T23:00:00.000Z',
  '2026-04-15T00:00:00.000Z', '2026-04-22T04:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=21 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=21 %'
);

-- Lead row 22: Carolyn Nicholas-Ashman → Stage 2
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'carolynnicholas5@gmail.com'),
  14, 2,
  'Bathroom renovation — Jamboree Heights', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Booked for 17/04', NULL,
  3, 1, 3,
  '2026-04-15', '2026-04-14T23:00:00.000Z',
  '2026-04-15T00:00:00.000Z', '2026-04-15T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=22 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=22 %'
);

-- Lead row 23: Janeen Bougoure → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'illusions2011@bigpond.com'),
  30, 1,
  'Timber decking — Wellington Point', 'Meta Ads enquiry — Instagram, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Called and had a chat. She is just after some information on a granny flat, but is also looking at buying a house with a granny flat in the back of the property. The work she wants doing is not to the house she owns now but the future. Sent email', NULL,
  3, 3, 6,
  '2026-04-15', '2026-04-14T23:00:00.000Z',
  '2026-04-15T00:00:00.000Z', '2026-04-15T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=23 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=23 %'
);

-- Lead row 24: Diana Maria → Stage 2
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'diana_gallego@hotmail.com'),
  14, 2,
  'Bathroom renovation — Carindale', 'Meta Ads enquiry — Instagram, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Would like a reno on a couple of bathrooms and maybe some other work in the living area. Booked in for 27/04', NULL,
  3, 1, 6,
  '2026-04-16', '2026-04-15T23:00:00.000Z',
  '2026-04-17T00:00:00.000Z', '2026-04-17T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=24 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=24 %'
);

-- Lead row 25: Lilly Espinola → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'lelyarcher@gmail.com'),
  30, 11,
  'Timber decking — Brisbane', 'Meta Ads enquiry — Instagram, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Didnt click on a link', NULL,
  3, 3, 6,
  '2026-04-14', '2026-04-13T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-04-14', 9, 'Didn''t click on the ad — accidental enquiry / bad lead.',
  0, 'legacy-row=25 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=25 %'
);

-- Lead row 26: Charlie Sciortino → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'charlie.sciortino49@gmail.com'),
  14, 11,
  'Bathroom renovation — Wurtulla', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
budget is 21k. we cant do a bathroom for under 25k', NULL,
  3, 1, 3,
  '2026-04-15', '2026-04-14T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-04-15', 1, 'Budget mismatch — client budget is $21k; YBMT bathrooms start at $25k+.',
  0, 'legacy-row=26 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=26 %'
);

-- Lead row 27: Robert Behan → Stage 4
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'rbehan64@gmail.com'),
  14, 4,
  'Bathroom renovation — Jimboomba', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Didnt pick up, sent email 11/05. Main bathroom then ensuite. Not easy to get to his place as he works long hours. Have asked him to send me some photos and measurements and I''ll send him a prelim quote subject to attendance', NULL,
  3, 1, 3,
  '2026-04-18', '2026-04-17T23:00:00.000Z',
  '2026-04-22T00:00:00.000Z', '2026-05-11T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=27 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=27 %'
);

-- Lead row 29: Steven Harrison → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'stharrison@outlook.com.au'),
  30, 1,
  'Timber decking — Auchenflower', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Didnt pick up, sent email 11/05. Didnt pick up, sent text 14/05', NULL,
  3, 3, 3,
  '2026-04-20', '2026-04-19T23:00:00.000Z',
  '2026-04-27T00:00:00.000Z', '2026-05-14T04:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=29 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=29 %'
);

-- Lead row 30: Maft → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'tra@gmail.com'),
  14, 11,
  'Bathroom renovation — Eatons', 'Meta Ads enquiry — Instagram, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
didnt pick up, sent email 11/05 - wrong email. wrong number and email', NULL,
  3, 1, 6,
  '2026-04-20', '2026-04-19T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-04-20', 9, 'Bad contact details — phone number malformed (+61040325833 in source), email bounced. Lead is unreachable.',
  0, 'legacy-row=30 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=30 %'
);

-- Lead row 31: Jess Harman → Stage 2
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'jessharman74@gmail.com'),
  14, 2,
  'Bathroom renovation — Brighton', 'Meta Ads enquiry — Instagram, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Booked for next thursday - bathroom reno', NULL,
  3, 1, 6,
  '2026-04-22', '2026-04-21T23:00:00.000Z',
  '2026-04-27T00:00:00.000Z', '2026-04-27T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=31 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=31 %'
);

-- Lead row 32: barrie john sibson → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'barsy3@bigpod.com'),
  14, 11,
  'Bathroom renovation — Hervey Bay', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
too far', NULL,
  3, 1, 3,
  '2026-04-22', '2026-04-21T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-04-22', 9, 'Out of service area — Hervey Bay is too far. Also email domain looks like a typo (bigpod vs bigpond).',
  0, 'legacy-row=32 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=32 %'
);

-- Lead row 33: James McAndrew → Stage 2
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'jamesmcandrew713@gmail.com'),
  14, 2,
  'Bathroom renovation — Manly West', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Booked for next tuesday - bathrooms reno', NULL,
  3, 1, 3,
  '2026-04-26', '2026-04-25T23:00:00.000Z',
  '2026-04-27T00:00:00.000Z', '2026-04-27T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=33 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=33 %'
);

-- Lead row 34: Rene Tarabay → Stage 2
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'renetarabay@gmail.com'),
  14, 2,
  'Bathroom renovation — Springwood', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Booked for thursday', NULL,
  3, 1, 3,
  '2026-04-27', '2026-04-26T23:00:00.000Z',
  '2026-04-28T00:00:00.000Z', '2026-04-28T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=34 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=34 %'
);

-- Lead row 35: Nikita Chand → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'nikki_chand@hotmail.com'),
  14, 11,
  'Bathroom renovation — Brisbane', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
found someone', NULL,
  3, 1, 3,
  '2026-04-27', '2026-04-26T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-04-27', 7, 'Went with another contractor.',
  0, 'legacy-row=35 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=35 %'
);

-- Lead row 36: Eunice Dalgety → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'eunice.dalgety@gmail.com'),
  14, 1,
  'Bathroom renovation — Brisbane', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Didnt pick up, sent email 11/05. Not picking up 14/05, sent text', NULL,
  3, 1, 3,
  '2026-04-28', '2026-04-27T23:00:00.000Z',
  '2026-04-28T00:00:00.000Z', '2026-05-14T04:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=36 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=36 %'
);

-- Lead row 38: Aketua Teariki → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'aketuateariki@gmail.com'),
  30, 11,
  'Timber decking — Gold Coast', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
didnt click on the ad', NULL,
  3, 3, 3,
  '2026-05-03', '2026-05-02T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-05-03', 9, 'Didn''t click on the ad — bad lead.',
  0, 'legacy-row=38 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=38 %'
);

-- Lead row 39: Donna Rennie → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'donnarennie70@hotmail.com'),
  14, 11,
  'Bathroom renovation — Benowa', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Didnt pick up, sent email 11/05. Called me back, she is only after replacing the bath with a shower. We''re not doing that due to waterproofing requirements', NULL,
  3, 1, 3,
  '2026-05-03', '2026-05-02T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-05-03', 4, 'Out of scope — client only wanted bath→shower swap. YBMT does not do this due to waterproofing requirements.',
  0, 'legacy-row=39 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=39 %'
);

-- Lead row 40: Lizzie → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'eandm.pbd@outlook.com'),
  14, 11,
  'Bathroom renovation — Runaway Bay', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Didnt pick up, sent email 11/05 - wrong email. Not picking up 14/05', NULL,
  3, 1, 3,
  '2026-05-04', '2026-05-03T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-05-04', 9, 'Bad contact details — wrong email, not picking up phone.',
  0, 'legacy-row=40 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=40 %'
);

-- Lead row 41: Christine Mann → Stage 2
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'christine.mann@mail.com'),
  14, 2,
  'Bathroom renovation — Brighton', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Didnt pick up, sent email 11/05. Bathroom and ensuite. Wednesday 20th 6.15am. 22 Pomona St Brighton

Site visit address: 22 Pomona St, Brighton
Site visit booked: 20/05/2026 at 06:15 Brisbane time', '22 Pomona St, Brighton',
  3, 1, 3,
  '2026-05-05', '2026-05-04T23:00:00.000Z',
  '2026-05-11T00:00:00.000Z', '2026-05-11T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=41 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=41 %'
);

-- Lead row 42: Lynda Mckee → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'lyndamckee@bigpond.com'),
  14, 11,
  'Bathroom renovation — Brisbane', 'Meta Ads enquiry — Instagram, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Missing a digit on the number. Emailed', NULL,
  3, 1, 6,
  '2026-05-07', '2026-05-06T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-05-07', 9, 'Bad contact details — phone number missing a digit (+6149049312 in source). Matt sent email; no response.',
  0, 'legacy-row=42 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=42 %'
);

-- Lead row 43: Aketua Teariki → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'aketuateariki+2@gmail.com'),
  14, 1,
  'Bathroom renovation — Gold Coast', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Re-enquiry from same lead (sheet row 43). Didnt pick up. Sent text', NULL,
  3, 1, 3,
  '2026-05-10', '2026-05-09T23:00:00.000Z',
  '2026-05-13T00:00:00.000Z', '2026-05-13T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=43 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=43 %'
);

-- Lead row 44: Kim Pope → Stage 2
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'kimlpope68@gmail.com'),
  14, 2,
  'Bathroom renovation — Augustine Heights', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
2 full bathroom - booked for tuesday 2pm', NULL,
  3, 1, 3,
  '2026-05-10', '2026-05-09T23:00:00.000Z',
  '2026-05-13T00:00:00.000Z', '2026-05-13T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=44 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=44 %'
);

-- Lead row 45: Jennifer Harding → Stage 2
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'hardinje8@gmail.com'),
  30, 2,
  'Timber decking — Carindale', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Didnt pick up. Sent text. 9am thursday 21st. 7 Aspen St Carindale

Site visit address: 7 Aspen St, Carindale
Site visit booked: 21/05/2026 at 09:00 Brisbane time', '7 Aspen St, Carindale',
  3, 3, 3,
  '2026-05-09', '2026-05-08T23:00:00.000Z',
  '2026-05-13T00:00:00.000Z', '2026-05-13T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=45 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=45 %'
);

-- Lead row 46: Gracie Green → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'msw1412@gmail.com'),
  30, 1,
  'Timber decking — Brisbane', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Tried and texted', NULL,
  3, 3, 3,
  '2026-05-12', '2026-05-11T23:00:00.000Z',
  '2026-05-21T00:00:00.000Z', '2026-05-21T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=46 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=46 %'
);

-- Lead row 47: Tania Walker → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'taniaewalker@gmail.com'),
  14, 11,
  'Bathroom renovation — Toowoomba', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
too far', NULL,
  3, 1, 3,
  '2026-05-12', '2026-05-11T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-05-12', 9, 'Out of service area — Toowoomba is too far.',
  0, 'legacy-row=47 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=47 %'
);

-- Lead row 48: Helena Lamana → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'helenalamana@hotmail.com'),
  30, 11,
  'Timber decking — Porto Alegre', 'Meta Ads enquiry — Instagram, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
another country', NULL,
  3, 3, 6,
  '2026-05-15', '2026-05-14T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-05-15', 9, 'Out of service area — lead is in Brazil (Porto Alegre). Likely ad targeting error.',
  0, 'legacy-row=48 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=48 %'
);

-- Lead row 49: Zeljko Koscica → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'zeljkokoscica@icloud.com'),
  30, 11,
  'Timber decking — Runcorn', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Didnt click on the link, he was confused', NULL,
  3, 3, 3,
  '2026-05-15', '2026-05-14T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-05-15', 9, 'Didn''t click on the ad — confused, bad lead.',
  0, 'legacy-row=49 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=49 %'
);

-- Lead row 50: Ruth Taiye Popoola → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'ruthpopoola_66@hotmail.com'),
  14, 11,
  'Bathroom renovation — Cairns', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
too far', NULL,
  3, 1, 3,
  '2026-05-16', '2026-05-15T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-05-16', 9, 'Out of service area — Cairns is too far.',
  0, 'legacy-row=50 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=50 %'
);

-- Lead row 51: Airi Ingram → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'airileke.ingram@gmail.com'),
  30, 11,
  'Timber decking — Peachester', 'Meta Ads enquiry — Instagram, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Told me not to bother', NULL,
  3, 3, 6,
  '2026-05-17', '2026-05-16T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-05-17', 3, 'Client told Matt ''not to bother'' — not interested.',
  0, 'legacy-row=51 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=51 %'
);

-- Lead row 52: Ginger → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'drgingersunrise@gmail.com'),
  14, 11,
  'Bathroom renovation — Logan', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Phone not ringing, sent email. Email bounced back', NULL,
  3, 1, 3,
  '2026-05-17', '2026-05-16T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-05-17', 9, 'Bad contact details — phone not ringing, email bounced back.',
  0, 'legacy-row=52 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=52 %'
);

-- Lead row 53: Aamod → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'aamodosho@gmail.com'),
  14, 1,
  'Bathroom renovation — Indooroopilly', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Got his details, but he will call me back about tuesday possibly?', NULL,
  3, 1, 3,
  '2026-05-18', '2026-05-17T23:00:00.000Z',
  '2026-05-21T00:00:00.000Z', '2026-05-21T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=53 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=53 %'
);

-- Lead row 54: Tricia Stroud → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'triciastroud73@gmail.com'),
  14, 1,
  'Bathroom renovation — Brisbane', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Tried and texted', NULL,
  3, 1, 3,
  '2026-05-18', '2026-05-17T23:00:00.000Z',
  '2026-05-21T00:00:00.000Z', '2026-05-21T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=54 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=54 %'
);

-- Lead row 55: Rob Monks → Stage 11
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'flaminskulls05@gmail.com'),
  14, 11,
  'Bathroom renovation — Brisbane', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Clicked the link by accident', NULL,
  3, 1, 3,
  '2026-05-19', '2026-05-18T23:00:00.000Z',
  NULL, NULL, NULL,
  '2026-05-19', 9, 'Clicked the ad by accident — bad lead.',
  0, 'legacy-row=55 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=55 %'
);

-- Lead row 56: Vonda Czudaj → Stage 2
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'vonda.czudaj@gmail.com'),
  14, 2,
  'Bathroom renovation — Capalaba', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Tried and texted. Unit 3 2/8 Holland Crescent Capalaba. Thursday 7am

Site visit address: Unit 3, 2/8 Holland Crescent, Capalaba
Site visit booked: 28/05/2026 at 07:00 Brisbane time', 'Unit 3, 2/8 Holland Crescent, Capalaba',
  3, 1, 3,
  '2026-05-20', '2026-05-19T23:00:00.000Z',
  '2026-05-21T00:00:00.000Z', '2026-05-21T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=56 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=56 %'
);

-- Lead row 57: Lance Zhou → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'lancezhou@msn.com'),
  30, 1,
  'Timber decking — Brisbane', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.', NULL,
  3, 3, 3,
  '2026-05-28', '2026-05-27T23:00:00.000Z',
  NULL, NULL, NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=57 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=57 %'
);

-- Lead row 58: Siva Thaiavarayn → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'sivathaivarayan@hotmail.com'),
  30, 1,
  'Timber decking — Shailer Park', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.', NULL,
  3, 3, 3,
  '2026-06-01', '2026-05-31T23:00:00.000Z',
  NULL, NULL, NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=58 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=58 %'
);

-- Lead row 59: Julia Beck → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'beckjulia33@gmail.com'),
  30, 1,
  'Timber decking — Queensland', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.', NULL,
  3, 3, 3,
  '2026-06-01', '2026-05-31T23:00:00.000Z',
  NULL, NULL, NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=59 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=59 %'
);

-- Lead row 60: Stewart Johnson → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'redz26@outlook.com'),
  14, 1,
  'Bathroom renovation — Brisbane', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.', NULL,
  3, 1, 3,
  '2026-06-01', '2026-05-31T23:00:00.000Z',
  NULL, NULL, NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=60 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=60 %'
);

-- Lead row 61: Graham Ferguson → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'graferg01@gmail.com'),
  30, 1,
  'Timber decking — Burleigh Waters', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.', NULL,
  3, 3, 3,
  '2026-06-06', '2026-06-05T23:00:00.000Z',
  NULL, NULL, NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=61 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=61 %'
);

-- Lead row 62: Izabela Pike → Stage 2
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'izabela.pike@gmail.com'),
  30, 2,
  'Timber decking — Parrearra', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
10/6 Corrina called. Booked for 3pm Tuesday 16th June
Site visit booked: 16/06/2026 at 15:00 Brisbane time', NULL,
  3, 3, 3,
  '2026-06-07', '2026-06-06T23:00:00.000Z',
  '2026-06-10T00:00:00.000Z', '2026-06-10T00:00:00.000Z', NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=62 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=62 %'
);

-- Lead row 63: Brian Stankovich → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'ned196bs@gmail.com'),
  30, 1,
  'Timber decking — Dimbulah', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.', NULL,
  3, 3, 3,
  '2026-06-15', '2026-06-14T23:00:00.000Z',
  NULL, NULL, NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=63 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=63 %'
);

-- Lead row 64: Chandar Dutt → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'cdutt@sunshinesugar.com.au'),
  14, 1,
  'Bathroom renovation — Gold Coast', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.', NULL,
  3, 1, 3,
  '2026-06-14', '2026-06-13T23:00:00.000Z',
  NULL, NULL, NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=64 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=64 %'
);

-- Lead row 65: kansowa → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'kansowa3@hotmail.com'),
  14, 1,
  'Bathroom renovation — TBC', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Name and city not captured properly in original sheet (city was ''3232'' — likely a postcode). Matt to clarify on first contact', NULL,
  3, 1, 3,
  '2026-06-14', '2026-06-13T23:00:00.000Z',
  NULL, NULL, NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=65 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=65 %'
);

-- Lead row 67: John Mizzi → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'mizzi4217@gmail.com'),
  14, 1,
  'Bathroom renovation — Surfers Paradise', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.', NULL,
  3, 1, 3,
  '2026-06-22', '2026-06-21T23:00:00.000Z',
  NULL, NULL, NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=67 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=67 %'
);

-- Lead row 68: Alison Bates → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'aliharris093@hotmail.com'),
  14, 1,
  'Bathroom renovation — Cairns', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
Cairns is typically out-of-area — flag for triage', NULL,
  3, 1, 3,
  '2026-06-23', '2026-06-22T23:00:00.000Z',
  NULL, NULL, NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=68 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=68 %'
);

-- Lead row 69: Emmy Beveridge → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'jcbeveridge@yahoo.com.au'),
  30, 1,
  'Timber decking — TBC', 'Meta Ads enquiry — Instagram, [LG] Deck Built Service campaign.

Legacy spreadsheet notes (verbatim from Carla''s old tracking sheet):
City field in source sheet was just ''M'' — Matt to capture on first contact', NULL,
  3, 3, 6,
  '2026-06-23', '2026-06-22T23:00:00.000Z',
  NULL, NULL, NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=69 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=69 %'
);

-- Lead row 70: Julie Hone → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'jlz68@hotmail.com'),
  30, 1,
  'Timber decking — Clontarf Beach', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.', NULL,
  3, 3, 3,
  '2026-06-25', '2026-06-24T23:00:00.000Z',
  NULL, NULL, NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=70 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=70 %'
);

-- Lead row 71: Sue Taylor → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'dmtwaddell@gmail.com'),
  14, 1,
  'Bathroom renovation — Jimboomba', 'Meta Ads enquiry — Facebook — paid ad, [LG] Bathroom Renovation Service campaign.', NULL,
  3, 1, 3,
  '2026-06-25', '2026-06-24T23:00:00.000Z',
  NULL, NULL, NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=71 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=71 %'
);

-- Lead row 72: Cara Campbell → Stage 1
INSERT INTO quotes (
  quote_number, client_id, scope_id, stage_id,
  title, description, job_site_address,
  estimator_id, line_of_business_id, lead_source_id,
  rfq_received_date, rfq_received_at,
  first_response_at, last_touchpoint_at, quote_sent_at,
  decision_date, reject_reason_id, reject_notes,
  is_sample, notes
)
SELECT
  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),
  (SELECT id FROM clients WHERE LOWER(primary_email) = 'ccampbell@mtatravel.com.au'),
  30, 1,
  'Timber decking — Gold Coast', 'Meta Ads enquiry — Facebook — paid ad, [LG] Deck Built Service campaign.', NULL,
  3, 3, 3,
  '2026-06-26', '2026-06-25T23:00:00.000Z',
  NULL, NULL, NULL,
  NULL, NULL, NULL,
  0, 'legacy-row=72 | imported=2026-06-26 | source=Carla legacy Google Sheet'
WHERE NOT EXISTS (
  SELECT 1 FROM quotes WHERE notes LIKE 'legacy-row=72 %'
);

-- ─── Phase C · Stage history rows ──────────────────────────────────────────
-- One stage_history row per quote: 'Imported from legacy spreadsheet at Stage N'

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 2, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=2 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 3, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=3 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 4, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=4 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 5, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=5 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 6, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=6 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 7, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=7 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 8, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=8 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 9, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=9 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 10, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=10 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 11, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=11 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 12, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=12 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 13, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=13 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 14, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=14 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 15, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=15 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 16, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=16 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 17, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=17 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 18, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=18 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 19, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=19 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 20, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=20 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 21, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=21 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 22, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=22 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 23, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=23 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 24, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=24 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 25, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=25 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 26, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=26 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 27, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=27 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 29, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=29 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 30, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=30 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 31, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=31 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 32, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=32 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 33, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=33 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 34, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=34 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 35, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=35 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 36, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=36 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 38, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=38 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 39, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=39 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 40, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=40 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 41, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=41 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 42, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=42 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 43, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=43 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 44, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=44 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 45, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=45 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 46, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=46 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 47, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=47 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 48, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=48 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 49, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=49 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 50, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=50 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 51, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=51 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 52, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=52 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 53, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=53 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 54, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=54 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 55, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=55 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 56, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=56 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 57, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=57 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 58, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=58 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 59, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=59 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 60, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=60 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 61, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=61 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 62, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=62 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 63, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=63 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 64, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=64 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 65, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=65 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 67, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=67 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 68, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=68 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 69, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=69 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 70, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=70 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 71, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=71 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row 72, current stage on import: ' || qs.name
  FROM quotes q
  JOIN quote_stages qs ON qs.id = q.stage_id
 WHERE q.notes LIKE 'legacy-row=72 %'
   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);

-- ─── DONE ──────────────────────────────────────────────────────────────────