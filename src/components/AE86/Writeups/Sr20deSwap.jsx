import clusterVssImage from '../../../assets/Automotive/ae86/writeups/sr20 swap/cluster_vss.jpg';

export const sr20deSwapMeta = {
  slug: "sr20de-swap",
  title: "SR20DE Engine Swap",
  date: "2025-06-15",
  excerpt: "Details on the S15 SR20DE swap into the kouki AE86 chassis.",
  image: null, // Optional: import image here when ready
};

export function Sr20deSwapContent() {
  const summaryStyle = {
    cursor: 'pointer',
    padding: '14px 18px',
    backgroundColor: 'hsl(var(--card))',
    border: '2px solid hsl(var(--border))',
    borderRadius: '8px',
    marginBottom: '4px',
    fontWeight: '600',
    fontSize: '1.1em',
    transition: 'all 0.2s ease'
  };

  const detailsStyle = {
    marginBottom: '20px',
    border: '2px solid hsl(var(--border))',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'border-color 0.2s ease'
  };

  const nestedSummaryStyle = {
    cursor: 'pointer',
    padding: '10px 14px',
    backgroundColor: 'hsl(var(--card))',
    border: '1px solid hsl(var(--border))',
    borderRadius: '6px',
    marginBottom: '8px',
    fontWeight: '500',
    fontSize: '0.95em',
    transition: 'all 0.2s ease'
  };

  const nestedDetailsStyle = {
    marginBottom: '12px',
    border: '1px solid hsl(var(--border))',
    borderRadius: '6px',
    overflow: 'hidden'
  };

  return (
    <>
      <p>
        I purchased a S15 SR20DE engine out of my friend's crashed S13 240sx. It came as a mostly complete swap, with a S13 manual transmission, wiring harness, ECU, manifolds, etc. Below I discuss my experience swapping it into my AE86. <b>This writeup is still in development as I continue to work on the swap and document the process.</b>
      </p>
      <br></br>

      <details style={detailsStyle}>
        <summary style={summaryStyle}>Parts List</summary>
        <div style={{padding: '16px'}}>
          <ul style={{margin: '0', paddingLeft: '20px'}}>
            <li>SR20DE motor</li>
            <li>S13 manual transmission (w/ SR20 bellhousing)</li>
            <li>Wiring Specialties flying lead harness</li>
            <li>JSPFab AE86 swap mount kit</li>
            <li>JSPFab tension rod bracket spacers</li>
            <li>GKTech S13 clutch line</li>
            <li>Yay Racing short ram intake</li>
            <li>Yay Racing throttle cable bracket</li>
            <li>Yay Racing MAF filter adapter</li>
            <li>Yay Racing radiator brackets</li>
            <li>Custom driveshaft</li>
            <li>Dakota Digital SGI-100BT</li>
            <li>GT-S cluster</li>
            <li>GT-S throttle cable</li>
          </ul>
        </div>
      </details>

      <details style={detailsStyle}>
        <summary style={summaryStyle}>Engine Installation</summary>
        <div style={{padding: '16px'}}>
          <p>
            Installing the engine was a bit of a challenge. I removed the core support following this Doctored Garage video
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"> (YouTube link) </a> 
            where you drill out all of the spot welds for the radiator support and replace them with threaded rivnuts. This makes it much easier since you'll have to pull the engine in and out a few times to get the clearances right. 
            
            For the most part, though, everything should slide in without too much difficulty. The firewall had to be clearanced slightly on the driver's side.
          </p>

          <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Subframe Spacers</summary>
            <div style={{padding: '12px'}}>
              <p>
                Quite straightforward, the subframe is dropped one inch using the JSPFab spacers. Just unbolt the subframe and the steering column ujoint, then lower it down and wedge the spacers in place. Finally, install the new bolts and torque to spec. {/*NOTE: Add torque spec */}
                <br></br>
                You will need to pull the steering column intermidate shaft out slightly to accomidate for the drop. Furthermore, it is recommended to adjust your suspension or purchase larger roll center adjusters (RCAs) to compensate for the changed roll center.
              </p>
            </div>
          </details>

          <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Shifter Hole Cutting</summary>
            <div style={{padding: '12px'}}>
              <p>
                The worst part is fitting the transmission. The shifter hole has to be cut very far back to make it work. Ideally, you would want to use an RB20 transmission which shares the same/similar body as the s13 one but has the shifter about an inch further forward. Or you could use a Hardbody D21 transmission, which will put the shifter in the stock AE86 location. I sit far back in my car though, so I honestly prefer the s13 shifter location.
              </p>
              <p>
                I cut the shifter hole about X inches back from the original location with a reciprocating saw. Pictures will be added here soon!
              </p>
            </div>
          </details>

          <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Engine Bracket</summary>
            <div style={{padding: '12px'}}>
              <p>
                The engine brackets are straightforward as well. The engine brackets are mounted using socket head cap screws and suitable spacers. The transmission mount uses the factory S13 rubber mount and bolts right up to the JSPFab bracket.
              </p>
            </div>
          </details>
        </div>
      </details>

      <details style={detailsStyle}>
        <summary style={summaryStyle}>Intake</summary>
        <div style={{padding: '16px'}}>
          <p>
            The intake system is is almost entirely 3d printed and places the air filter in the corner of the engine bay, similar to where the factory 4AGE intake is placed.
          </p>

          <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Intake Pipe</summary>
            <div style={{padding: '12px'}}>
              <p>
                The Yay Racing intake pipe is a great fit in the engine bay. I printed mine in ABS and it has held up well so far. The couplers are printed in TPU and also fit nicely. They have grooves built into them to help the system seal better.
              </p>


            </div>
          </details>

          <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Filter Adapter</summary>
            <div style={{padding: '12px'}}>
              <p>
                The Yay Racing filter adapter is built around a generic 3.5" pod filter. It fits nicely in the corner of the engine bay and has plenty of clearance from the fender and hood.
              </p>
            </div>
          </details>


        </div>
      </details>

      <details style={detailsStyle}>
        <summary style={summaryStyle}>Exhaust</summary>
        <div style={{padding: '16px'}}>
          <p>
            The factory SR20DE manifold will bolt up with minor clearancing to the firewall, but the exhaust exit is in the wrong location. I don't think you could make it work without extensive modification. Since custom headers are expensive and off-the-shelf s14/s15 headers probably wouldn't fit either, I initially used a SR20DET turbo manifold with the output flange cut off and a pipe welded to it. This allowed us to direct the exhaust in a more suitable direction. 
            I later opted to buy a S14 HKS 4-2-1 header, which fit surprisingly well! One runner had to be modified to clear the steering shaft, but otherwise it fit quite well. If you buy a brand new one it will probably need considerable modification, but the one I bought secondhand on Buyee already had the resonator removed 
          </p>
        </div>
      </details>

      <details style={detailsStyle}>
        <summary style={summaryStyle}>Wiring</summary>
        <div style={{padding: '16px'}}>
          <p>
            Wiring with the wiring specialties harness is easy, as pretty much everything is plug and play. The bare minimum to get the car running and driving is only wiring in the ignition switched power, starter signal, fuel pump, and alternator charge light. However, I did my best to make everything work properly.
          </p>

          <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Tachometer</summary>
            <div style={{padding: '12px'}}>
              <p>
                For the tachometer and speedometer, I used a Dakota Digital SGI-100BT unit. This takes the tach signal from the ECU and converts it to a signal the AE86 cluster can read.
                <br></br>
                Many recommend just using a pull-up resistor on the tach signal wire, or a tachometer signal booster, but I needed the speed adjustment anyways and this unit worked well. It also allows for fine tuning to make sure the calibration is exactly correct.
              </p>
            </div>
          </details>

          <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Speedometer</summary>
            <div style={{padding: '12px'}}>
              <p>
                <b>Only some AE86 clusters</b> will output the speed signal using a reed switch in the speedometer. My thought is that this only came on cars optioned with cruise control, as only one of my three clusters had this feature (one kouki GT-S has it, my other kouki GT-S and kouki SR-5 do not). You may be able to add this functionality by carefully cutting a hole in the PCB to add the necessary screw, although I am not sure if these clusters are actually equipped with the reed switch internally.

                <br></br>

                You can check if your cluster is equipped by looking for a small screw on the the back of the cluster close to the speedometer cable.
              </p>
              <div style={{display: 'flex', justifyContent: 'center', marginTop: '12px'}}>
                <img src={clusterVssImage} alt="AE86 Cluster VSS" style={{width: '100%', maxWidth: '600px', borderRadius: '8px'}} />
              </div>

              <p>
                <b>Note that to get a VSS signal for the ECU, you must have a working speedometer needle</b>. This means that you must swap in the speedometer cable pinion gear in place of the factory nissan VSS on the transmission, and connect the factory speedometer cable to it. This is discussed in "Miscellaneous" below.
                <br></br>
                Once the speedometer needle is working, we need to connect the cluster's VSS output to the Dakota Digital unit's speed input, and then the Dakota Digital unit will output a clean VSS signal to the ECU. <br></br><b>Here are my Dakota Digital settings:</b>
                <ul style={{listStyleType: 'disc', paddingLeft: '20px'}}>
                  <li>Pull-Up: On</li>
                  <li>In/Out: Low/Low</li>
                  <li>Calibration Factor: 0.43</li>
                </ul>
              </p>
            </div>
          </details>

          {/* <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Water Temp</summary>
            <div style={{padding: '12px'}}>
              <p>
                Content for water temp wiring section.
              </p>
            </div>
          </details> */}

          <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Oil Pressure</summary>
            <div style={{padding: '12px'}}>
              <p>
                The oil pressure sender on the SR20DE and 4AGE/4AC are of the same thread pitch (1/8 BSPT). This means that the best way to get the oil pressure working is to simply swap the SR20DE sender for the factory AE86 one. This will allow the factory cluster to read the oil pressure correctly. You can hook it up using your original oil pressure wiring from the AE86.
              </p>
            </div>
          </details>

          {/* <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Check Engine Light</summary>
            <div style={{padding: '12px'}}>
              <p>
                The wiring specialties harness includes a check engine light, but this can be snipped and wired into the cluster's check engine light.
              </p>
            </div>
          </details> */}

          <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Alternator Charge Light</summary>
            <div style={{padding: '12px'}}>
              <p>
                The alternator power can be wired in two ways: 
                <br></br>
                The easy (maybe lazy) way is to connect a +12V ignition siwtch power source to the alternator warning light wire on the wiring specialties harness via a 470ohm resistor. This is sufficient to make the alternator turn on and charge the batter
                <br></br>
                The proper way is to wire in the alternator warning light circuit from the cluster. This involves connecting the alternator warning light wire from the wiring specialties harness to the alternator warning light wire on the cluster. This way, when the alternator is not charging, the light will illuminate on the cluster.
                <br></br>
                If you don't do either of these, the alternator will not charge the battery. Therefore it is cruical to wire this in properly.
              </p>
            </div>
          </details>

          {/* <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Starter Signal</summary>
            <div style={{padding: '12px'}}>
              <p>
                Content for starter signal wiring section.
              </p>
            </div>
          </details> */}

          <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Fuel Pump</summary>
            <div style={{padding: '12px'}}>
              <p>
                If your car already has an electric fuel pump (I.E, previous had a 16V engine or similar), then wiring in the fuel pump is as simple as connecting the wiring specialties harness fuel pump wire to the existing fuel pump wiring. 
                <br></br>
                Otherwise, it is recommended to buy an OEM Toyota fuel hanger which includes a wiring bulkhead, and the fuel pump wiring can be connected there. These fuel hangers come factory in AE86 GT-S, but will fit SR-5 models as well.
              </p>
            </div>
          </details>

          {/* <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Reverse Lights</summary>
            <div style={{padding: '12px'}}>
              <p>
                Content for reverse lights wiring section.
              </p>
            </div>
          </details> */}
        </div>
      </details>

      {/* <details style={detailsStyle}>
        <summary style={summaryStyle}>Fuel System</summary>
        <div style={{padding: '16px'}}>
          <p>
            I reused the 4AC fuel filter bracket which has a spring clip on it to hold a filter. This actually fits an S13 fuel filter quite nicely, I just relocated it to a factory bolt hole on the passenger side frame rail. I had already set this up when I put the 16v 4AGE in the car, so this part was very easy.
          </p>
        </div>
      </details> */}

      <details style={detailsStyle}>
        <summary style={summaryStyle}>Miscellaneous</summary>
        <div style={{padding: '16px'}}>
          {/* <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Heater Valve</summary>
            <div style={{padding: '12px'}}>
              <p>
                Following a Facebook post by Devin from Doctored Garage, I was able to rotate the heater valve 90 degrees. I believe he originally did this to clear the ITB setup on his Beams Corolla, however, it helps here too since the SR20 intake manifold sits pretty close to the firewall. You will have to grind down the arm that the cable attaches to a little bit since it will hit the pipe when rotated.
                Regardless, the brake booster vacuum fitting will interfere directly with the heater valve. Instead of drilling a new hole for the cable or moving the valve over, I opted to look into a 90-degree fitting for the booster so I could get some additional clearance. This is still a work in progress, but I'll update this when it's done! 
              </p>
            </div>
          </details> */}

          <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Clutch Line</summary>
            <div style={{padding: '12px'}}>
              <p>
                I chose to run an S13 clutch line on this car. I opted for the GKTech unit since it is slightly longer than some other aftermarket ones. The thread pitch on the master cylinder side is the same as the factory AE86 one, so it will thread in without issue. On the transmission side I am just using a factory S13 slave cylinder.
              </p>
            </div>
          </details>

          <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Speedometer</summary>
            <div style={{padding: '12px'}}>
              <p>
                To get the speedometer working on the cluster, I had to swap in the speedometer cable pinion gear to replace the VSS normally found on the S13 transmission. This gear is what drives the speedometer cable, and it is a simple press fit onto the transmission output shaft.
                <br></br>
                Once this is installed, you can connect the factory AE86 speedometer cable to it and the speedometer needle should work properly. You will need to DIY a small bracket in order to keep the pinion from backing out of the transmission. I used P/N 32702-58S20 becuase it was the cheapest and easiest to find online, however my speedometer consistently reads fast. I think, if possible, it would be best to find P/N 32702-58S22 or P/N 32702-58S22 which should have a more accurate ratio (this is for an AE86 with a 4.3 final drive, and 15" wheels, some adjustments may be necessary).
              </p>
            </div>
          </details>

          <details style={nestedDetailsStyle}>
            <summary style={nestedSummaryStyle}>Driveshaft</summary>
            <div style={{padding: '12px'}}>
              <p>
                I took my original AE86 driveshaft and a S13 driveshaft to a local driveshaft shop to have a custom one built. They measured the size and teeth count on the transmission-side yoke and the differential-side flange, and made me a new one-piece from scratch.
              </p>
            </div>
          </details>

        </div>
      </details>
    </>
  );
}
